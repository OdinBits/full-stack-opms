import { inActiveDashboard, activeDashboard, activeProjectLists, inActiveProjectLists, inActiveNewProject, activeNewProject } from "../constants/images";


export const navLinks = [
    { label: 'Dashboard', path: '/Dashboard', image: inActiveDashboard, activeImage: activeDashboard },
    { label: 'Project Listing', path: '/Table', image: inActiveProjectLists, activeImage: activeProjectLists },
    { label: 'Create Project', path: '/CreateProject', image: inActiveNewProject, activeImage: activeNewProject },
];

export interface ActiveLinks {
    isActive: number;
    history: string[];
}

export const initialActiveLink: ActiveLinks = {
    isActive: 0,
    history: []
};