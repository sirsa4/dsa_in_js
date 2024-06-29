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
    //create new Node
    const newNode = new Node(val)
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++
    }
    return this
  }
  loop = () => {
    let current = this.head;
    while (current) {
      console.log(current.val)
      current = current.next

    }
  }
  pop = () => {
    if (!this.head) {
      return undefined
    }
    let oldHead = this.head
    let newTail = oldHead
    while (oldHead.next) {
      newTail = oldHead
      oldHead = oldHead.next
    }
    this.tail = newTail
    this.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return this.oldHead
  }
  shift = () => {
    if (!this.head) {
      return undefined
    }
    let current = this.head
    let nextNode = current.next;
    this.head = nextNode
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return current
  }
  unshift = (val) => {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head
      this.head = newNode;
    }
    this.length++;
    return this

  }
}

const linkedList = new SinglyLinkedList()
linkedList.push("shake")
linkedList.push("and")
linkedList.push("bake")
linkedList.push("yup")
linkedList.push("again")
linkedList.loop()
console.log("----------")
linkedList.unshift("first")
linkedList.loop()

