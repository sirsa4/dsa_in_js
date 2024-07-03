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
    let current = this.head
    while (current) {
      console.log(`Current node: (${current.val}) - Next node: (${current.next ? current.next.val : null}) - lenght: (${this.length}) `)
      current = current.next
    }
  }
  push = (val) => {
    if (val === undefined || val === null) return null
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
  get = (index) => {
    if (index < 0 || index >= this.length) {
      return null
    }
    let count = 0
    let current = this.head
    while (index !== count) {
      current = current.next
      count++
    }
    return current
  }
  pop = () => {
    if (!this.head) return null
    let current = this.head
    let newTail = this.head
    while (current.next) {
      newTail = current
      current = current.next
    }
    this.tail = newTail
    this.tail.next = null
    this.length--
    if (this.length === 0) {
      this.tail = null
    }
    return current
  }
  shift = () => {
    if (!this.head) {
      return false
    }
    let currentHead = this.head
    this.head = currentHead.next
    this.length--
    if (this.length === 0) {
      this.tail = null
    }
    return currentHead
  }
  unshift = (val) => {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    if (this.length === 0) {
      this.tail = null
    }
    return this
  }
  set = (index, val) => {
    if (index < 0 || index >= this.length) return false
    let count = 0
    let current = this.head
    while (index !== count) {
      current = current.next
      count++
    }
    if (current) {
      current.val = val
      return true
    }
    return false
  }
  insert = (index, val) => {
    let newNode = new Node(val)
    if (index < 0 || index > this.length) return false
    if (index === this.length) {
      this.push(val)
      return true
    }
    if (index === 0) {
      this.unshift(val)
      return true
    }
    let prevNode = this.get(index - 1)
    let nextNode = prevNode.next
    newNode.next = nextNode
    prevNode.next = newNode
    this.length++
    return true
  }
  remove = (index) => {
    if (index < 0 || index >= this.length) {
      return false
    }
    if (index === this.length - 1) {
      this.pop()
      return true
    }
    if (index === 0) {
      this.shift()
      return true
    }
    let prevNode = this.get(index - 1)
    let nextNode = prevNode.next

    //point prevNode to node after nextNode. jumping and cutting link to nextNode
    prevNode.next = nextNode.next
    this.length--
    return true
  }
  reverse = () => {
    if (!this.head) return null
    //store current head
    let current = this.head
    //swap head and tail of entire list
    this.head = this.tail
    this.tail = current

    //prev and next node variable
    let prev = null
    let next;
    while (current) {
      //store next node in temp variable
      next = current.next
      //reverse - point current node to previous node
      current.next = prev
      //move prev to current
      prev = current
      //move current to next
      current = next
    }
    return this
  }
}

let linklist = new SinglyLinkedList()
console.log(linklist)
console.log("--------------------")
linklist.push("one")
linklist.push("two")
linklist.push("three")
linklist.push("four")
linklist.set(0, "oneee")
linklist.set(2, "tueeee")
linklist.insert(1, "insert at index 1")
linklist.insert(4, "new insert at index 4")
linklist.remove(0)
linklist.remove(5)
linklist.reverse()
linklist.print()
console.log("---------------------")
let item = linklist.get(2)
console.log(item)
