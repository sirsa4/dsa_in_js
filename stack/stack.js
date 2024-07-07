class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = null;
  }
  print = () => {
    let current_node = this.head;
    while (current_node) {
      console.log(`Current node: (${current_node.val}) - Next node: (${current_node.next ? current_node.next.val : "Null"}) - Length: (${this.length})`)
      current_node = current_node.next;
    }
  }
  push = (val) => {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this.length;
  }
  pop = () => {
    if (!this.head) {
      return null;
    }
    let currentHead = this.head;
    this.length--;
    if (this.head === this.tail) {
      this.tail = null;
    }
    this.head = currentHead.next
    this.length--;
    return currentHead.val;
  }
}
//23,230,2301
const stack = new Stack();
stack.push(0);
stack.push(1);
stack.push(2);
stack.push(3);
let item;
stack.print();
console.log("-----------------------")
console.log(item)
