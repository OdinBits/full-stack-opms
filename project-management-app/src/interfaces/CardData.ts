
export interface cardData {
    totalProject: string; 
    closed: string; 
    running: string; 
    delayed: string; 
    cancelled: string;
}

export const generateCardData = (data: cardData | null) => [
    { title: 'Total Projects', value: data?.totalProject },
    { title: 'Closed', value: data?.closed },
    { title: 'Running', value: data?.running },
    { title: 'Closure Delay', value: data?.delayed },
    { title: 'Cancelled', value: data?.cancelled },
];