import reverseString from './reverse_string';

test('reverse string', () => {
  const str = 'Hi My name is Andrei';
  expect(reverseString(str)).toBe('ierdnA si eman yM iH');
});
