const str = 'coderbyte';
const str2 = "I Love Code"

const FirstReverse = (str) => {
  const result = str.split("").reverse().join(" ")
  return result;
};

// keep this function call here
console.log(FirstReverse(str2));

// Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order.
//  For example: if the input string is "Hello World and Coders"
//  then your program should return the string sredoC dna dlroW olleH.
