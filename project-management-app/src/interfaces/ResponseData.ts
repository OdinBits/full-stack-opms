export interface Project {
    _id: string;
    projectInfo: string;
    reason: string;
    type: string;
    division: string;
    category: string;
    priority: string;
    department: string;
    startDate: Date;
    endDate: Date;
    currentStatus: string;
    location: string;
  }