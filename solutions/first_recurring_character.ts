//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]
//It should be return 2
//Given an array = [2,1,1,2,3,5,1,2,4]
//It should be return 2
//Given an array = [2,3,4,5]
//It should be return undefined

export default function firstRecurringCharacter(nums: number[]) {
  let set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return nums[i];
    }
    set.add(nums[i]);
  }
  return undefined;
}
//time complexity O(n)
//space complexity O(n)
