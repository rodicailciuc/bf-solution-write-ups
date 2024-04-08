'use strict';

import { sum } from './solution1.js';

describe('Basic Tests', () => {
    it(' 1 + 2  ->  3', () => {
        expect(sum(1, 2)).toEqual(3);
    });
    it('should return 3 when 8 is passed', () => {
        expect(sum(8, 9)).toEqual(17);
    });
    it('should return 4 when 11 is passed', () => {
        expect(sum(11, 3)).toEqual(14);
    });
});
