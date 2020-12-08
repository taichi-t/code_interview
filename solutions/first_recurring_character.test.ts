//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]
//It should be return 2
//Given an array = [2,1,1,2,3,5,1,2,4]
//It should be return 1
//Given an array = [2,3,4,5]
//It should be return undefined

import firstRecurringCharacter from './first_recurring_character';

test('first recurring character 1', () => {
  const nums = [2, 5, 1, 2, 3, 5, 1, 2, 4];
  expect(firstRecurringCharacter(nums)).toEqual(2);
});
test('first recurring character 2', () => {
  const nums = [2, 1, 1, 2, 3, 5, 1, 2, 4];
  expect(firstRecurringCharacter(nums)).toEqual(1);
});
test('first recurring character 3', () => {
  const nums = [2, 3, 4, 5];
  expect(firstRecurringCharacter(nums)).toEqual(undefined);
});
