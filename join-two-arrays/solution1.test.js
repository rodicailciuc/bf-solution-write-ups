'use strict';

import { join } from './solution1.js';

describe('join function', () => {
    it('should correctly join arrays based on id property', () => {
        const arr1 = [
            { id: 1, name: 'John' },
            { id: 2, name: 'Jane' },
            { id: 3, name: 'Doe' },
        ];
        const arr2 = [
            { id: 2, age: 30 },
            { id: 3, age: 25 },
            { id: 4, age: 40 },
        ];
        const expectedResult = [
            { id: 1, name: 'John' },
            { id: 2, name: 'Jane', age: 30 },
            { id: 3, name: 'Doe', age: 25 },
            { id: 4, age: 40 },
        ];

        const result = join(arr1, arr2);

        expect(result).toEqual(expectedResult);
    });

    it('should handle empty arrays', () => {
        const arr1 = [];
        const arr2 = [];
        const expectedResult = [];

        const result = join(arr1, arr2);

        expect(result).toEqual(expectedResult);
    });

    it('should handle arrays with duplicate ids', () => {
        const arr1 = [
            { id: 1, name: 'John' },
            { id: 2, name: 'Jane' },
            { id: 3, name: 'Doe' },
        ];
        const arr2 = [
            { id: 2, age: 30 },
            { id: 3, age: 25 },
            { id: 3, city: 'New York' },
        ];
        const expectedResult = [
            { id: 1, name: 'John' },
            { id: 2, name: 'Jane', age: 30 },
            { id: 3, name: 'Doe', age: 25, city: 'New York'},
        ];

        const result = join(arr1, arr2);

        expect(result).toEqual(expectedResult);
    });
});
