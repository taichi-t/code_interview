class MyQueue {
  item: any[] = [];
  constructor() {}

  push(x: number): void {
    this.item.push(x);
  }

  pop(): number {
    return this.item.shift();
  }

  peek(): number {
    return this.item[0];
  }

  empty(): boolean {
    return this.item.length == 0;
  }
}
export default MyQueue;
