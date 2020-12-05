import findPair from './find_pair';

test('find pair 1', () => {
  const arr1 = ['a', 'b', 'c', 'x'];
  const arr2 = ['z', 'y', 'i'];
  expect(findPair(arr1, arr2)).toBe(true);
});

test('find pair 2', () => {
  const arr1 = ['a', 'b', 'c', 'x'];
  const arr2 = ['z', 'y', 'x'];
  expect(findPair(arr1, arr2)).toBe(true);
});
