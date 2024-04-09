# [rail Code](https://leetcode.com/problems/join-two-arrays-by-id/description/?envType=study-plan-v2&envId=30-days-of-javascript)

```js
const join = (arr1, arr2) => {
  const newObj = {};
  const arrs = [...arr1, ...arr2];
  for (let index = 0; index <= arrs.length - 1; index++) {
    newObj[arrs[index].id] = { ...newObj[arrs[index].id], ...arrs[index] };
  }
  return Object.values(newObj);
};
```

## Strategy

- Rail's strategy employed here is to merge arrays based on a common property 
   (id). It achieves this by using an object, where the
   id serves as the key. This approach ensures that each unique id will have
   only one entry in the final result, with properties merged from
   all occurrences in the input arrays.

## Implementation

- newObj is initialized as an empty object
   to store merged elements.
- arr1 and arr2 are concatenated into a     single array 
   arrs using the spread operator (...).
- The code iterates through each element of arrs. For each element,
   it checks if there's already an entry in newObj with the same id.
   If yes, it merges the current element with the existing one using the spread 
   operator (...). If not, it creates a new entry in newObj with the id as the key.
- Finally, the function returns an array containing the 
   values of newObj. This  array contains the merged elements.
