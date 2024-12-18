import { beforeAll, test, expect, describe } from '@jest/globals';
import { truncateText, getPositionOfLastSpaceBeforeIndex } from './index';

let TEXT: string;

beforeAll(() => {
    TEXT = 'Lorem ipsum dolor sit amet.';
});

describe('truncateText', () => {
    describe('handle small index', () => {
        test('with ellipsis shown', () => {
            expect(truncateText(TEXT, 3)).toBe('…');
        });

        test('dots instead of ellipsis', () => {
            expect(truncateText(TEXT, 3, { dotsInsteadOfEllipsis: true })).toBe(
                '...'
            );
        });

        test('with ellipsis hidden', () => {
            expect(truncateText(TEXT, 3, { hideIfNoWords: true })).toBe('');
        });
    });

    test('index on space', () => {
        expect(truncateText(TEXT, 6)).toBe('Lorem…');
    });

    test('index inside word', () => {
        expect(truncateText(TEXT, 15)).toBe('Lorem ipsum…');
    });

    describe('handle index bigger than string', () => {
        test('with ellipsis shown', () => {
            expect(truncateText(TEXT, 50)).toBe('Lorem ipsum dolor sit amet.');
        });

        test('with ellipsis hidden', () => {
            expect(truncateText(TEXT, 50, { hideIfNoWords: true })).toBe(
                'Lorem ipsum dolor sit amet.'
            );
        });
    });
});

describe('getPositionOfLastSpaceBeforeIndex', () => {
    test('index right before first space', () => {
        expect(getPositionOfLastSpaceBeforeIndex(TEXT, 5)).toBe(-1);
    });

    test('index right on the first space', () => {
        expect(getPositionOfLastSpaceBeforeIndex(TEXT, 5)).toBe(-1);
    });

    test('index right after space', () => {
        expect(getPositionOfLastSpaceBeforeIndex(TEXT, 6)).toBe(5);
    });

    test('index inside word', () => {
        expect(getPositionOfLastSpaceBeforeIndex(TEXT, 15)).toBe(11);
    });

    test('index bigger than string length', () => {
        expect(getPositionOfLastSpaceBeforeIndex(TEXT, 50)).toBe(21);
    });
});
