//Given 2 arrays, create a function that lets a user know (false/true) whether these two arrays contain any common items
//For example :

//const array1 =["a","b","c","x"]
//const array2 =["z","y","i"];
//should return false
//-------------------------------
//const array1 =["a","b","c","x"]
//const array2 =["z","y","x"];
//shoud return ture

export default function findPair(arr1: string[], arr2: string[]): boolean {
  let mergedArr = [...arr1, arr2];
  let set = new Set();
  for (let i = 0; 0 < mergedArr.length; i++) {
    if (set.has(mergedArr[i])) {
      return true;
    }
    set.add(mergedArr[i]);
  }
  return false;
}
