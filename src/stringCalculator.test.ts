import {describe, expect, test} from 'vitest';
import {stringCalculator} from './stringCalculator';

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
    test('returns 0 for string with only non-numeric values', () => {
        expect(stringCalculator("abc,def")).toBe(0);
    });
    test('handles negative numbers', () => {
        expect(stringCalculator("1,-2,3")).toBe(2);
    });
    test('handles large numbers', () => {
        expect(stringCalculator("1000,2000,3000")).toBe(6000);
    });
    test('handles mixed delimiters', () => {
        expect(stringCalculator("1\n2,3\n4")).toBe(10);
    });
    test('handles single number input', () => {
        expect(stringCalculator("5")).toBe(5);
    });
    test('handles multiple consecutive delimiters', () => {
        expect(stringCalculator("1,,2\n\n3")).toBe(6);
    });
});