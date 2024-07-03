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
      return null
    }
    let current = this.head
    while (current) {
      console.log(`current node: (${current.val}) - next node: (${current.next ? current.next.val : null})`)
      current = current.next
    }
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
  pop = () => {
    if (!this.head) {
      return null
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
      this.tail = null
    }
  }
  shift = () => {
    if (!this.head) return null
    //current head
    let currentHead = this.head
    //next node after head node
    let nextNode = currentHead.next
    this.head = nextNode
    this.length--
    if (this.length === 0) {
      this.tail = null
    }
    return currentHead
  }
  get = (index) => {
    if (index < 0 || index >= this.length) return null
    let count = 0
    let foundNode = this.head
    while (index !== count) {
      foundNode = foundNode.next
      count++
    }
    return foundNode
  }
  set = (index, val) => {
    if (index < 0 || index >= this.length) return false
    let foundNode = this.get(index)
    if (foundNode) {
      foundNode.val = val
      return true
    }
  }
  unshift = val => {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }
  insert = (index, val) => {
    //out of pounds index
    if (index < 0 || index > this.length) {
      return false
    }
    //when on last index
    if (index === this.length) {
      this.push(val)
      return true
    }
    //when on first index
    if (index === 0) {
      this.unshift(val)
      return true
    }
    //prev and next node
    let prevNode = this.get(index - 1)
    let nextNode = prevNode.next
    //new node
    let newNode = new Node(val)

    //put new node between prev and next node
    prevNode.next = newNode
    newNode.next = nextNode

    //increment list length and return true
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
    //prev
    let prevNode = this.get(index - 1)
    //node after current node 
    let nextNode = prevNode.next.next

    //point prev node to next next node, jumping over the current one
    prevNode.next = nextNode
    this.length--
    return true
  }
  reverse = () => {
    if (!this.head) {
      return null
    }
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


let linklist = new SinglyLinkedList()
linklist.push("one")
linklist.push("two")
linklist.push("three")
linklist.push("four")
linklist.reverse()
linklist.print()


export default SinglyLinkedList
