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
}

let linklist = new DoubleLinkedList();
linklist.push("one")
linklist.push("two")
linklist.push("three")
linklist.push("four")
console.log(linklist)
linklist.print()
