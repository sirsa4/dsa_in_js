class Node {
  constructor(val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}
class DoubleLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  print = () => {
    let current = this.head
    while (current) {
      console.log(`Current node: (${current.val}) - Prev node: (${current.prev ? current.prev.val : "no node before this"}) - Next node: (${current.next ? current.next.val : "final node"}) `)
      current = current.next
    }
  }
  push = (val) => {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      //point current tail of the entire list to newNode 
      this.tail.next = newNode
      //point prev of newNode back to old tail
      newNode.prev = this.tail
      //make newNode the tail of the entire list
      this.tail = newNode
    }
    this.length++
    return this
  }
  pop = () => {
    if (!this.head) return null
    if (this.length === 1) {
      this.head = null
      this.tail = null
    }
    //current final tail
    let oldTail = this.tail
    //make previous tail the new final tail of the entire list
    this.tail = oldTail.prev
    //sever or cut link to old tail
    this.tail.next = null
    //cut oldTail prev link back current new tail
    oldTail.prev = null
    this.length--
    return oldTail
  }
  shift = () => {
    if (!this.head) return null
    let oldHead = this.head
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      //store current node at head of list
      //move head to next node at at index 1
      this.head = oldHead.next
      //remove links of old head node
      this.prev = null
      oldHead.next = null
      //decrement list and return removed node
    }
    this.length--
    return oldHead
  }
  unshift = (val) => {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      //store the old
      let oldHead = this.head
      oldHead.prev = newNode
      newNode.next = oldHead
      this.head = newNode
    }
    this.length++
    return this
  }
}

let linklist = new DoubleLinkedList();
linklist.push("one")
linklist.push("two")
linklist.push("three")
linklist.push("four")
let item = linklist.unshift("new first")
linklist.unshift("last new first!")
linklist.unshift("ok, new first?")
console.log(linklist)
console.log(item)
linklist.print()
