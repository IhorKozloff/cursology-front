export const getRandomItemsFromArray = <T>(array: T[], emount?: number) => {
    const emountOfItems = emount || 4;
    const shufledArr = [...array].sort(() => Math.random() - 0.5);
    return shufledArr.filter((item, idx) => item && idx < emountOfItems);
};