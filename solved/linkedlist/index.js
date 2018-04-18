// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    const node = new Node(data, this.head);
    this.head = node;
  }

  size() {
    let size = 0;
    let node = this.head;

    while (node) {
      node = node.next;
      size++;
    }

    return size;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;

    while (node.next) {
      node = node.next;
    }

    return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    this.head = this.head ? this.head.next : null;
  }

  removeLast() {
    if (!this.head || !this.head.next) {
      this.removeFirst();
      return;
    }

    let node = this.head;
    let previous = this.head;

    while (node.next) {
      previous = node;
      node = node.next;
    }

    previous.next = null;
  }

  insertLast(data) {
    const node = new Node(data);
    const lastNode = this.getLast();
    if (lastNode) {
      lastNode.next = node;
    } else {
      this.head = node;
    }
  }

  getAt(index) {
    if (!this.head) {
      return null;
    }

    let counter = 0;
    let node = this.head;

    while (node) {
      if (counter === index) {
        return node;
      }
      node = node.next;
      counter++;
    }

    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const nodePrevious = this.getAt(index-1);
    const nodeNext = this.getAt(index+1);
    nodePrevious.next = nodeNext;
  }

  insertAt(data, index) {
    const node = new Node(data);

    if (index === 0) {
      this.insertFirst(data)
      return;
    }
    const nodePrevious = this.getAt(index-1) || this.getLast();
    const nodeAtThisIndex = this.getAt(index);
    node.next = nodeAtThisIndex;
    nodePrevious.next = node;
  }

  forEach(fn) {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while (node) {
      fn(node);
      node = node.next;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
