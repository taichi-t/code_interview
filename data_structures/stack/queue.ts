class Node {
  value: any;
  next: any;
  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  first: any;
  last: any;
  length: number;
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value: any) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first == this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return this;
  }
}

const queue = new Queue();
queue.enqueue('joy');
queue.enqueue('matt');
queue.enqueue('pavel');
queue.enqueue('samir');
queue.peek();
queue.dequeue();

console.log(queue);

export {};
