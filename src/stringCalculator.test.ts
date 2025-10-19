import {describe, expect, test} from 'vitest';

const stringCalculator = (input: string): number => {
    return 0; // Placeholder implementation
}

describe('String Calculator', () => {
    test('adds numbers in a string', () => {
        expect(stringCalculator("1,2,3")).toBe(6);
    });
});