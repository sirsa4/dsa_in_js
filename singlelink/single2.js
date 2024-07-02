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
  print = () => {
    if (!this.head) {
      return undefined
    }
    let current = this.head
    while (current) {
      console.log(current)
      current = current.next
    }
  }
  push = (val) => {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++
    return this
  }
  get = (index) => {
    if (index < 0 || index >= this.length) {
      return null
    }
    let current = this.head
    let count = 0
    while (count !== index) {
      current = current.next
      count++
    }
    return current
  }
}

const linklist = new SinglyLinkedList()
linklist.push("Hello")
linklist.push("World!")
console.log(linklist)
linklist.print()
console.log("------------")
const item = linklist.get(0)
console.log(item)
