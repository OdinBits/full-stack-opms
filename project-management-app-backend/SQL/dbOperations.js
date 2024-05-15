import { config } from "./dbCongif.js";
import { connect } from "mssql";

export async function getProjects() {
    try {
        let pool = await connect(config);
        let projects = await pool.request().query('SELECT COUNT(projectId) FROM ProjectManagement');
        console.log(projects);
        return projects;
    } catch (error) {
        console.log(error);
    }
}
