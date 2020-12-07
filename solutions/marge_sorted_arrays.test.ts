import margedSortedArrays from './marge_sorted_arrays';

test('marged sorted arrays', () => {
  const arr1 = [0, 3, 4, 31];
  const arr2 = [4, 6, 30];

  expect(margedSortedArrays(arr1, arr2)).toEqual([0, 3, 4, 4, 6, 30, 31]);
});
