import {describe, expect, test} from 'vitest';

const stringCalculator = (input: string): number => {
    if (input === "") return 0;
    input = input.replace(/\n/g, ',');
    input = input.replace(/[^0-9,.]/g, '');
    const numbers = input.split(',').map(parseFloat).filter(num => !isNaN(num));
    return numbers.reduce((sum, num) => sum + num, 0);
}

describe('String Calculator', () => {
    test('adds numbers in a string', () => {
        expect(stringCalculator("1,2,3")).toBe(6);
    });
    test('returns 0 for empty string', () => {
        expect(stringCalculator("")).toBe(0);
    });
    test('handles new lines as delimiters', () => {
        expect(stringCalculator("1\n2,3")).toBe(6);
    });
    test('ignores non-numeric values', () => {
        expect(stringCalculator("1,abc,3")).toBe(4);
    });
    test('handles spaces and trims input', () => {
        expect(stringCalculator(" 1 , 2 , 3 ")).toBe(6);
    });
    test('handles decimal numbers', () => {
        expect(stringCalculator("1.5,2.5,3")).toBe(7);
    });
});