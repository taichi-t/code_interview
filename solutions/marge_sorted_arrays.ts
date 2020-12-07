//My ansert
// export default function margeSortedArrays(
//   arr1: number[],
//   arr2: number[]
// ): number[] {
//   const margedArrs = [...arr1, ...arr2];
//   return margedArrs.sort((a, b) => {
//     return a - b;
//   });
// }
//O(2n)
// console.log(margeSortedArrays(arr1, arr2));

export default function margeSortedArrays(arr1: number[], arr2: number[]) {
  const margedArrs: number[] = [];
  let arr1Item = arr1[0];
  let arr2Item = arr2[0];
  let i = 1;
  let j = 1;

  //Check input
  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }

  while (arr1Item || arr2Item) {
    if (!arr2Item || arr1Item < arr2Item) {
      margedArrs.push(arr1Item);
      arr1Item = arr1[i];
      i++;
    } else {
      margedArrs.push(arr2Item);
      arr2Item = arr2[j];
      j++;
    }
  }

  return margedArrs;
}

//O(n)
