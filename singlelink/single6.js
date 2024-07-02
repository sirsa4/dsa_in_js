class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  print = () => {
    if (!this.head) return undefined
    let current = this.head;
    while (current) {
      console.log(`Node value: (${current.val}), Next node value: ${current.next ? current.next.val : null} - isHead: ${current === this.head} - isTail: ${current === this.tail}`);
      current = current.next;
    }
  }
  push = (val) => {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      //add new node to tail of current node which current last node
      this.tail.next = newNode
      //make new node the current final node
      this.tail = newNode
    }
    this.length++
    return this
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

  }
}


const linklist = new SinglyLinkList()
linklist.push("one")
linklist.push("two")
linklist.push("three")
linklist.push("four")
console.log(linklist)
console.log("-------------")
linklist.unshift("new first")
linklist.unshift("even newer first")
linklist.print()
