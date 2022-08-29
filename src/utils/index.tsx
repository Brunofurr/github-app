
export const getDateString = (datestring: string): string => {
    const nDate = new Date(datestring);
    return nDate.toLocaleDateString();
}