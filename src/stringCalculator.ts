export const stringCalculator = (input: string): number => {
    if (input === "") return 0;
    input = input.replace(/\n/g, ',');
    input = input.replace(/[^0-9,.-]/g, '');
    const numbers = input.split(',').map(parseFloat).filter(num => !isNaN(num));
    return numbers.reduce((sum, num) => sum + num, 0);
}