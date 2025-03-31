export function formatDate(date: Date): string {
    return date.toISOString().split('T')[0];
}

export function addDays(date: Date, days: number): Date {
    let newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days);
    return newDate;
};
