class Node {
  value: number;
  next: any | null;
  prev?: any | null;
  constructor(value: number) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  head: { value: number; next: null | any };
  tail: { value: number; next: null | any };
  lenght: number;
  constructor(value: number) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.lenght = 1;
  }
  append(value: number) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.lenght++;
    return this;
  }

  prepend(value: number) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.lenght++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index: number, value: number) {
    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }
    if (index >= this.lenght) {
      return this.append(value);
    }
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.lenght++;
    return this.printList();
  }

  traverseToIndex(index: number) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index: number) {
    const leader = this.traverseToIndex(index - 1);
    leader.next = leader.next.next;
    this.lenght--;
    return this.printList();
  }
}

// const linkedList = new LinkedList(10);
// linkedList.append(5);
// linkedList.prepend(6);
// linkedList.insert(1, 99);
// linkedList.remove(1);
// console.log(linkedList.printList());
// console.log(linkedList);

class DoublyLinkedList {
  head: { value: number; next: null | any; prev?: null | any };
  tail: { value: number; next: null | any; prev?: null | any };
  lenght: number;
  constructor(value: number) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.lenght = 1;
  }
  append(value: number) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.lenght++;
    return this;
  }

  prepend(value: number) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.lenght++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index: number, value: number) {
    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }
    if (index >= this.lenght) {
      return this.append(value);
    }
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
    this.lenght++;
    return this.printList();
  }

  traverseToIndex(index: number) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index: number) {
    const leader = this.traverseToIndex(index - 1);
    leader.next = leader.next.next;
    this.lenght--;
    return this.printList();
  }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this;
  }
}

const doublyLinkedList = new DoublyLinkedList(10);
doublyLinkedList.append(5);
doublyLinkedList.append(6);
doublyLinkedList.prepend(1);
// linkedList.prepend(6);
doublyLinkedList.insert(1, 99);
doublyLinkedList.reverse();
// linkedList.remove(1);
console.log(doublyLinkedList.printList());
