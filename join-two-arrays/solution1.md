# [joinedarray](https://leetcode.com/problems/join-two-arrays-by-id/description/?envType=study-plan-v2&envId=30-days-of-javascript)

```js
const join = (arr1, arr2) => {
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
```

## Behavior

The function join takes two arrays, arr1 and arr2, as parameters.
It concatenates arr1 and arr2 to create a single array.

## Strategy

Merging objects from two arrays (arr1 and arr2)
 based on a common identifier (id).
It first combines the arrays into one.
Then, it iterates over each object in the combined array, merging objects with 
 the same id.
Finally, it sorts the resulting array based on the id property.

## Implementation

The function uses a combination of array methods (concat, forEach, sort),
    and object manipulation to achieve its goal.
It employs object destructuring to extract the id property from each object.
It uses an object (merged) to store merged objects based on their id.
It returns an array of merged objects sorted by their id property.
