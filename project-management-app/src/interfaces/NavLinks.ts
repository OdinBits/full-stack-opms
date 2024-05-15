import activeDashboard from '../assets/images/Dashboard/Dashboard-active.svg';
import activeProject from '../assets/images/Project/Project-list-active.svg';
import activeCreateProject from '../assets/images/CreateProjectImage/create-project-active.svg';
import dashboardImage from '../assets/images/Dashboard/Dashboard.svg';
import projectImage from '../assets/images/Project/Project-list.svg';
import createProjectImage from '../assets/images/CreateProjectImage/create-project.svg';

export const navLinks = [
    { label: 'Dashboard', path: '/Dashboard', image: dashboardImage, activeImage: activeDashboard },
    { label: 'Project Listing', path: '/Table', image: projectImage, activeImage: activeProject },
    { label: 'Create Project', path: '/CreateProject', image: createProjectImage, activeImage: activeCreateProject },
];

export interface ActiveLinks {
    isActive: number;
    history: string[];
}

export const initialActiveLink: ActiveLinks = {
    isActive: 0,
    history: []
};