class Stack {
  array: any;
  constructor() {
    this.array = [];
  }
  peek() {
    return this.array[this.array.length - 1];
  }
  push(value: any) {
    this.array.push(value);
    return this;
  }
  pop() {
    this.array.pop();
    return this;
  }
}

const stack = new Stack();
stack.push('google');
stack.push('udemy');
stack.push('discord');

console.log(stack);
