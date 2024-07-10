class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  print = () => {
    let currentNode = this.head;
    while (currentNode) {
      console.log(`Current node: (${currentNode.val}) - Next node: (${currentNode.next ? currentNode.next.val : ("null")}) - Length: (${this.length})`);
      currentNode = currentNode.next;
    }
  }
  enqueue = (val) => {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this.length;
  }
  dequeue = () => {
    if (!this.head) {
      return null;
    }
    let oldHead = this.head;
    this.head = oldHead.next;
    oldHead.next = null;
    this.length--;
    return oldHead.val;
  }
}

export default Queue;
