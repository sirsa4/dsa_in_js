class Node {
  constructor(val) {
    this.val = val;
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  print = () => {
    let current = this.head
    while (current) {
      console.log(current.val)
      current = current.next
    }
  }
  push = (val) => {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++;
    return this
  }
  pop = () => {
    if (!this.head) {
      return undefined
    }
    let head = this.head
    let newTail = this.head
    while (head.next) {
      newTail = head
      head = head.next
    }
    this.tail = newTail
    this.tail.next = null
    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return head
  }
  unshift = (val) => {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    }
    //make current node be 2nd after new node with .next attr on newNode
    newNode.next = this.head
    this.head = newNode
    this.length++;
    if (!this.length === 0) {
      this.tail = null;
    }
    return this
  }

}
const linkList = new SinglyLinkedList()
linkList.push("one")
linkList.push("two")
linkList.push("three")
linkList.pop()
linkList.unshift("new one")
linkList.unshift("okk")
console.log(linkList)
linkList.print()
