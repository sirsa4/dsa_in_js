class Node {
  constructor(val) {
    this.val = val
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
    if (!this.head) {
      return undefined
    }
    let current = this.head
    while (current) {
      console.log(`Current value: (${current.val}) Next node: (${current.next ? current.next.val : "no next node"})`)
      current = current.next
    }
  }
  get = (index) => {
    let count = 0
    let current = this.head
    if (index < 0 || index >= this.head) {
      return undefined
    }
    while (index !== count) {
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
      this.tail = newNode
    }
    this.length++
  }
  pop = () => {
    if (!this.head) return undefined
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
      this.null = null
    }
    return head
  }
  unshift = (val) => {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
      this.length++
    } else {
      newNode.next = this.head
      this.head = newNode
      this.length++
    }
    if (this.length === 0) {
      this.tail = null
    }
    return newNode
  }
}

let linklist = new SinglyLinkedList()
linklist.push("one")
linklist.push("two")
linklist.unshift("new first")
linklist.pop()
linklist.print()
console.log(linklist)
console.log("------------")
let item = linklist.get(0)
console.log(item)
