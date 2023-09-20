export const minutestoHoursConverter = (minutes: number | undefined) => {
    if (minutes === undefined) {
        return {h: 0, m: 0};
    }
    const h = Number((minutes / 60).toFixed());
    return {h, m: minutes%60};
};