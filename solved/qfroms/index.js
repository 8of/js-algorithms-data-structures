// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.straight = new Stack();
    this.reversed = new Stack();
  }

  add(record) {
    this.straight.push(record);
  }

  peekOrPop(isDestructive) {
    while (this.straight.peek()) {
      this.reversed.push(this.straight.pop());
    }
    const record = isDestructive ? this.reversed.pop() : this.reversed.peek();
    while (this.reversed.peek()) {
      this.straight.push(this.reversed.pop());
    }
    return record;
  }

  remove() {
    return this.peekOrPop(true);;
  }

  peek() {
    return this.peekOrPop(false);
  }
}

module.exports = Queue;
