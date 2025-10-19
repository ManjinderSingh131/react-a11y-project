import {describe, expect, test} from 'vitest';

const stringCalculator = (input: string): number => {
    if (input === "") return 0;
    const numbers = input.split(',').map(Number);
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
});