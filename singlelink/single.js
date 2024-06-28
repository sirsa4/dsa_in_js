//node class
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;

  }
}

// let first = new Node("Hello")
// first.next = new Node("World!")
// first.next.next = new Node("ok")
// console.log(first.val, first.next.val, first.next.next.val)

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push = (val) => {
    let node = new Node(val)
    //first node
    if (!this.head) {
      this.head = node;
      this.tail = node;
      //current node after first node is created in else block
      //next node is pointed to with this.tail.next 
      this.tail.next = node;
      this.tail = node;
    }
    this.length++
    return this

  }
}

const linklist = new SinglyLinkedList();
linklist.push("Hello")
linklist.push("World!")
linklist.push("yup")
linklist.push("no")
console.log(linklist.head.next.next)
