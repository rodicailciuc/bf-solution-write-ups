'use strict';

/** ...........................
 * Join Two Arrays by ID
 *
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */

export const join = (arr1, arr2) => {
  const combinedArray = arr1.concat(arr2);
  const merged = {};

  combinedArray.forEach((obj) => {
    const { id } = obj;
    if (!merged[id]) {
      merged[id] = { ...obj };
    } else {
      merged[id] = { ...merged[id], ...obj };
    }
  });
  const joinedArray = Object.values(merged);
  joinedArray.sort((a, b) => a.id - b.id);
  return joinedArray;
};
