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
    } else {

      //current node after first node is created in else block
      //next node is pointed to with this.tail.next 
      this.tail.next = node;
      this.tail = node;
    }
    this.length++
    return this

  }
  loop = () => {
    let current = this.head
    while (current) {
      console.log(current.val)
      current = current.next
    }
  }
  pop = () => {
    if (!this.head) {
      return undefined
    }

    let head = this.head
    let newTail = head
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
      this.length++;
    }
    else {
      newNode.next = this.head
      this.head = newNode
      this.length++
    }
    if (this.length === 0) {
      this.tail = null;
    }
    return this
  }
  get = (index) => {
    if (!this.head) {
      return undefined
    }
    let correctNode = this.head
    let counter = 0;
    if (index < 0 || index >= this.length) return null;
    while (counter !== index) {
      correctNode = correctNode.next;
      counter++
    }
    return correctNode
  }
  set = (index, val) => {
    let correctNode = this.get(index)
    if (correctNode) {
      correctNode.val = val
      return true
    }
    return false
  }
  insert = (index, val) => {
    if (index < 0 || index > this.length) {
      return false
    }
    if (index === this.length) {
      this.push(val)
      return true
    }
    if (index === 0) {
      this.unshift(val)
      return true
    }
    let newNode = new Node(val)
    let prevNode = this.get(index - 1)
    let nextNode = prevNode.next
    prevNode.next = newNode
    newNode.next = nextNode
    this.length++
    return true
  }
  reverse = () => {
    if (!this.head) return null
    let current = this.head
    this.head = this.tail
    this.tail = current
    let prev = null
    let next;
    while (current) {
      next = current.next
      current.next = prev
      prev = current
      current = next
    }
    return this
  }
}

const linklist = new SinglyLinkedList();
linklist.push("Hello")
linklist.push("World!")
linklist.push("yup")
linklist.push("no")
linklist.loop()
console.log("---------------")
linklist.set(1, "Bye")
linklist.insert(2, "used to be yuuup")
linklist.reverse()
linklist.loop()
