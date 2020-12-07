//Create a function that reverses a string:
//"Hi My name is Adnrei" shoud be:
// "ierdnA si eman yM iH"

export default function reverseString(str: string) {
  //check input
  if (!str || str.length < 2) {
    throw new Error('No answer');
  }
  return str.split('').reverse().join('');
}
