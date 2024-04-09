
# [ovchynnikov](https://leetcode.com/problems/join-two-arrays-by-id/description/?envType=study-plan-v2&envId=30-days-of-javascript)

```js

let join = function(arr1, arr2) {
    const joinedHashMap = {};
    for(let objFromArray of arr1.concat(arr2)) {
        let id = objFromArray.id;
        joinedHashMap[id] ?
        joinedHashMap[id] = {...joinedHashMap[id], ...objFromArray} :
        joinedHashMap[id] = objFromArray
    }
    return Object.values(joinedHashMap)
};
```

## Strategy

The strategy here is to iterate through both arrays, merging elements based on a common property (id) into an object, effectively creating a hashmap where id serves as the key. This ensures that each unique id will have only one entry in the final result, with properties merged from all occurrences in the input arrays.

## Implementation

- joinedHashMap is initialized as an empty object to store merged  elements.
- arr1 and arr2 are concatenated into a single array using the concat method.
- The code iterates through each object in the concatenated array.
- For each object, it extracts the id property. It checks if there's already an entry in joinedHashMap with the same id. If yes, it merges the current object with the existing one using spread syntax (...). If not, it adds the current object as a new entry in joinedHashMap.
- Finally, the function returns an array containing the values of joinedHashMap. This array contains the merged elements.