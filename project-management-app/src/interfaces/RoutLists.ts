import CreateProject from '../containers/NewProject';
import Dashboard from '../containers/Dashboard';
import Table from '../containers/Table';

export const routeConfig = [
    { path: "*", element: Dashboard},
    { path: "Dashboard", element: Dashboard},
    { path: "Table", element: Table},
    { path: "CreateProject", element: CreateProject},
];