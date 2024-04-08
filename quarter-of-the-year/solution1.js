'use strict';

/**
 * Check a month belong to which quarter of the year.
 *
 * @param {number} month - The month to check to which quarter it belongs to.
 * @returns {number} Quarter of the year.
 */

export const quarterOfTheYear = (month) => {
    return Math.ceil(month / 3);
};
