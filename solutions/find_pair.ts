//Given 2 arrays, create a function that lets a user know (false/true) whether these two arrays contain any common items
//For example :

//const array1 =["a","b","c","x"]
//const array2 =["z","y","i"];
//should return false
//-------------------------------
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];
//shoud return ture

export default function findPair(arr1: string[], arr2: string[]): boolean {
  let set = new Set();
  for (let i = 0; i < arr1.length; i++) {
    set.add(arr1[i]);
  }

  for (let j = 0; j < arr2.length; j++) {
    if (set.has(arr2[j])) {
      return true;
    }
  }
  return false;
}
