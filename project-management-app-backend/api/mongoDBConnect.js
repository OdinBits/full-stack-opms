const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const bcrypt = require("bcryptjs");
app.set("view engine", "ejs");
const mongoose = require("mongoose");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const jwt = require("jsonwebtoken");
const JWT_SECRET = "djfldjf;ljdf82749283740001+_)90*&^acvnm";
const mongoUrl = "mongodb+srv://nishantchavan209:nishant@cluster0.ve0nhbs.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connection successfull");
    })
    .catch((e) => console.log(e));

const projectSchema = new mongoose.Schema
    (
        {
            projectInfo: String,
            reason: String,
            type: String,
            division: String,
            category: String,
            priority: String,
            department: String,
            startDate: Date,
            endDate: Date,
            currentStatus: String,
            location: String,
        },
        {
            collection: "Project",
            strict: true,
        },
    );

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
    

app.post("/CreateProject", async (req, res) => {
    const {
        projectInfo,
        reason,
        type,
        division,
        category,
        priority,
        department,
        startDate,
        endDate,
        currentStatus = 'Registered',
        location,
    } = req.body;

    try {
        // Check for duplicate project names

        const duplicateCheck = await Project.findOne({ 'projectInfo': projectInfo});

        if (duplicateCheck) {
            res.send({ status: "error", message: "Project name already exists. Please choose a different name." });
            return;
        }
        else {
            // If no duplicates are found, create the new project
            await Project.create({
                projectInfo,
                reason,
                type,
                division,
                category,
                priority,
                department,
                startDate,
                endDate,
                currentStatus,
                location,
            });

            // Send a successful response
            res.send({ status: "ok", message: "Project created successfully" });
        }


    } catch (error) {
        // Handle any other errors
        console.error(error);
        res.status(500).send({ status: "error", message: "An error occurred while creating the project." });
    }
});


app.get("/paginatedUsers", async (req, res) => {
    const allUser = await Project.find({});
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 7;

    const startIndex = (page - 1) * limit;
    const lastIndex = page * limit;

    const results = {};
    results.totalUser = allUser.length;
    results.pageCount = Math.ceil(allUser.length / limit);

    if (lastIndex < allUser.length) { results.next = { page: page + 1, }; }

    if (startIndex > 0) { results.prev = { page: page - 1, }; }

    results.result = allUser.slice(startIndex, lastIndex);
    res.json(results);
});

app.get("/paginationSearchProjects", async (req, res) => {
    const searchQuery = req.query.search || '';
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 7;

    let query = {};
    if (searchQuery) {
        // Apply search filter only if searchQuery is not empty
        query = { name: { $regex: searchQuery, $options: 'i' } };
    }

    const allUser = await Project.find(query);

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};
    results.totalUser = allUser.length;
    results.pageCount = Math.ceil(allUser.length / limit);

    if (endIndex < allUser.length) {
        results.next = { page: page + 1 };
    }

    if (startIndex > 0) {
        results.prev = { page: page - 1 };
    }

    results.result = allUser.slice(startIndex, endIndex);
    res.json(results);
});


app.get("/getAllUser", async (req, res) => {
    try {
        const allUser = await Project.find({});
        res.send({ status: "ok", data: allUser });
    }
    catch (error) { console.log(error); }
});

app.post("/UpdateStatus", async (req, res) => {
    const id = req.body.id;
    const newStatus = req.body.newStatus;
    console.log(id)
    console.log(newStatus)
    try {
        const updatedRow = await Project.updateOne({ _id: id }, { $set: { currentStatus: newStatus } })
        res.send({ status: "ok", data: updatedRow });
    }
    catch (err) {
        console.log(err)
    }
});

app.get("/getAllCount", async (req, res) => {
    try {
        const totalProject = await Project.countDocuments();
        const running = await Project.countDocuments({ 'currentStatus': "Running" });
        const closed = await Project.countDocuments({ 'currentStatus': "Closed" });
        const delayed = await Project.countDocuments({
            $and: [
                { 'endDate': { $lt: new Date() } },
                { 'currentStatus': "Running" }
            ]
        });
        const cancelled = await Project.countDocuments({ 'currentStatus': "Cancelled" });



        res.send({
            data: {
                totalProject,
                running,
                closed,
                delayed,
                cancelled,
            },
        });

    }
    catch (error) {
        console.log(error);
    }
});



app.get("/barGraph", async (req, res) => {


    try {
        // total STR
        const str = await Project.find({ department: "Strategy" }).count();

        // total STR/closed
        const strCount = await Project.find({ $and: [{ department: "Strategy" }, { currentStatus: "Closed" }] }).count();

        // total fin
        const fin = await Project.find({ department: "Finance" }).count();
        // total fin/closed
        const finCount = await Project.find({ $and: [{ department: "Strategy" }, { currentStatus: "Closed" }] }).count();

        // total STR
        const qlt = await Project.find({ department: "Quality" }).count();
        // total STR/closed
        const qltCount = await Project.find({ $and: [{ department: "Quality" }, { currentStatus: "Closed" }] }).count();

        // total STR
        const man = await Project.find({ department: "Management" }).count();
        // total STR/closed
        const manCount = await Project.find({ $and: [{ department: "Management" }, { currentStatus: "Closed" }] }).count();

        // total STR
        const sto = await Project.find({ department: "Stores" }).count();
        // total STR/closed
        const stoCount = await Project.find({ $and: [{ department: "Stores" }, { currentStatus: "Closed" }] }).count();

        // total STR
        const hr = await Project.find({ department: "Hr" }).count();
        // total STR/closed
        const hrCount = await Project.find({ $and: [{ department: "Hr" }, { currentStatus: "Closed" }] }).count();

        const locationTtls = await Project.aggregate([
            {
                $group: {
                    _id: "$location",
                    totalProjects: { $sum: 1 },
                }
            },
            {
                $project: {
                    _id: 0,
                    totalProjects: 1,
                }
            }
        ]);

        const distinctLocationCount = await Project.aggregate([
            {
                $group: {
                    _id: "$location"
                }
            },
            {
                $count: "distinctLocationCount"
            }
        ]);

        // Extract the count from the aggregation result
        const locationCount = distinctLocationCount[0] ? distinctLocationCount[0].distinctLocationCount : 0;


        const closedProjectsPerLocation = await Project.aggregate([
            {
                $group: {
                    _id: "$location",
                    totalProjects: { $sum: 1 },
                    closedProjects: { $sum: { $cond: [{ $eq: ["$currentStatus", "Closed"] }, 1, 0] } }
                }
            },
            { $sort: { _id: 1 } }, // Sort by location name in ascending order
            {
                $project: {
                    _id: 0,
                    location: "$_id",
                    totalProjects: 1,
                    closedProjects: 1
                }
            }
        ]);

        const closedProjectsPerDepartment = await Project.aggregate([
            {
                $group: {
                    _id: "$department",
                    totalProjects: { $sum: 1 },
                    closedProjects: { $sum: { $cond: [{ $eq: ["$currentStatus", "Closed"] }, 1, 0] } }
                }
            },
            { $sort: { _id: 1 } }, 
            {
                $project: {
                    _id: 0,
                    department: "$_id",
                    totalProjects: 1,
                    closedProjects: 1
                }
            }
        ]);

        // all barGraph data in one response
        return res.send
            ({
                str: str,
                strCount: strCount,

                fin: fin,
                finCount: finCount,

                qlt: qlt,
                qltCount: qltCount,

                man: man,
                manCount: manCount,

                sto: sto,
                stoCount: stoCount,

                hr: hr,
                hrCount: hrCount,

                projectPerLocation: closedProjectsPerLocation,

                locationTotals: locationTtls,

                distinctLocationCount: locationCount,

                departmentWise: closedProjectsPerDepartment
            });
    }
    catch (error) {
        console.log(error)
    }
})



const userSchema = new mongoose.Schema(
    {
        email: { type: String, unique: true },
        password: String,
        name:String
    },
    {
        collection: "User",
    }
);
const User = new mongoose.model("User", userSchema);

app.post("/login-user", async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        return res.json({ error: "User Not found" });
    }


    if (await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ email: user.email }, JWT_SECRET, { expiresIn: "15m", });

        if (res.status(201)) {
            return res.json({ status: "ok", data: token , email: user.email, userName: user.name});
        }
        else {
            return res.json({ error: "error" });
        }
    }
    res.json({ status: "error", error: "Invalid Password" });
});


const port = 8000;
app.listen(port, () => {
    console.log(`server started on ${port} port`);
});
