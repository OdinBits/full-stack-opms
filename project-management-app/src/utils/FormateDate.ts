export const formatDate = (date: Date | string) => {
    return new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    }).toLowerCase();
};

export const formatDateDisplay = (date: Date | string) => {
    const parsedDate = new Date(date);
    const month = parsedDate.toLocaleDateString('en-US', { month: 'short' });
    const day = parsedDate.toLocaleDateString('en-US', { day: '2-digit' });
    const year = parsedDate.toLocaleDateString('en-US', { year: 'numeric' });
    return `${month}-${day}, ${year}`;
};

