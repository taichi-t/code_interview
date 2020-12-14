import MyQueue from './queue_using_stacks';

describe('My Queue unit test', () => {
  const myQueue = new MyQueue();
  test('should return empty array creating instance of MyQueue', () => {
    expect(myQueue).toEqual({ item: [] });
  });

  test('should return [1] calling push(1)', () => {
    myQueue.push(1);
    expect(myQueue).toEqual({ item: [1] });
  });
  test('should return [1,2] of the array calling push(2) after calling push(1)', () => {
    myQueue.push(2);
    expect(myQueue).toEqual({ item: [1, 2] });
  });

  test('should return 1 calling peek after calling push(1) and push(2)', () => {
    expect(myQueue.peek()).toEqual(1);
  });
  test('should return 1 calling pop()', () => {
    expect(myQueue.pop()).toEqual(1);
  });
  test('should return false calling empty()', () => {
    expect(myQueue.empty()).toEqual(false);
  });
});
