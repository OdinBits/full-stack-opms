const express = require("express");
const app = express();
const cors = require("cors");
const { ConnectionPool } = require("mssql");

app.use(cors());
app.use(express.json());

const config = {
    user: 'nishantchavan',
    password: 'nishant@44',
    server: 'DESKTOP-BUER246',
    database: 'ProjectManagement',
    options: {
        encrypt: true,
        enableArithAbort: true,
        trustServerCertificate: true,
        instancename: 'Techprimelab',
    },
    port: 1433,
};

const pool = new ConnectionPool(config);


pool.connect()
    .then(() => {
        console.log("Connected to MS SQL Server");
    })
    .catch((err) => {
        console.error("Error connecting to MS SQL Server:", err);
    });

// Define your APIs here
app.get("/projectCount", async (req, res) => {
    try {
        const result = await pool.request().query('SELECT * FROM ProjectManagement');
        const projectCount = result.recordset[0].projectCount;
        console.log("Project Count:", projectCount);
        res.json({ projectCount });
    } catch (error) {
        console.error("Error retrieving project count:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


app.post("/insertData", async (req, res) => {
    try {
        const { projectTheme, reason, type, division, category, priority, department, startDate, endDate, location, status = "Open"} = req.body;

        const inputParams = {
            projectTheme,
            reason,
            type,
            division,
            category,
            priority,
            department,
            startDate,
            endDate,
            location,
            status 
        };

        //console.log("project param sql", inputParams);

        const columns = Object.keys(inputParams).join(', ');
        const values = Object.keys(inputParams).map(param => `@${param}`).join(', ');

        const request = pool.request();

        // Add input parameters dynamically
        Object.entries(inputParams).forEach(([param, value]) => {
            request.input(param, value);
        });

        const query = `
            INSERT INTO Project (${columns})
            VALUES (${values})
        `;

        await request.query(query);

        console.log("Data inserted successfully");
        res.json({ success: true });
    } catch (error) {
        console.error("Error inserting data:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.get("/paginatedProject", async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 7;

        const query = `
            SELECT *
            FROM Project
            ORDER BY projectId
            OFFSET ${(page - 1) * limit} ROWS
            FETCH NEXT ${limit} ROWS ONLY;
        `;

        const result = await pool.request().query(query);

        const totalUserQuery = 'SELECT COUNT(projectId) AS totalCount FROM Project;';
        const totalCountResult = await pool.request().query(totalUserQuery);
        const totalUser = totalCountResult.recordset[0].totalCount;

        const results = {};
        results.totalUser = totalUser;
        results.pageCount = Math.ceil(totalUser / limit);

        if (page < results.pageCount) {
            results.next = { page: page + 1 };
        }

        if (page > 1) {
            results.prev = { page: page - 1 };
        }

        results.result = result.recordset;

        res.json(results);
    } catch (error) {
        console.error("Error fetching paginated users:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.post("/updateStatus", async (req, res) => {
    const id = req.body.id;
    const newStatus = req.body.newStatus;

    try {
        const query = `
            UPDATE Project
            SET status = @newStatus
            WHERE id = @id;
        `;

        const result = await pool.request()
            .input('newStatus', newStatus)
            .input('id', id)
            .query(query);

        if (result.rowsAffected[0] > 0) {
            res.send({ status: "ok", data: result });
        } else {
            res.status(404).json({ error: "Record not found" });
        }
    } catch (error) {
        console.error("Error updating status:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


const port = 9000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
