class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push = (val) => {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }
  print = () => {
    if (!this.head) {
      return null
    }
    let current = this.head
    while (current) {
      console.log(current.val)
      current = current.next
    }
  }
  get = (index) => {
    let count = 0;
    let current = this.head
    if (index < 0 || index >= this.length) {
      return null
    }
    while (count !== index) {
      current = current.next
      count++
    }
    return current
  }
  push = (val) => {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode;
    }
    this.length++
    return this
  }
}

const linklist = new SinglyLinkedList()
linklist.push("one")
linklist.push("two")
linklist.push("three")
linklist.push("four")
console.log(linklist)
linklist.print()
const item = linklist.get(0)
console.log("----------")
linklist.print()
