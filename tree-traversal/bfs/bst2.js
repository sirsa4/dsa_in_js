import Queue from "./queue.js"
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  print = (node = this.root, prefix = "", isLeft = true) => {
    if (node !== null) {
      console.log(`${prefix}${isLeft ? "├── " : "└── "}${node.val}`);
      this.print(node.left, `${prefix}${isLeft ? "│   " : "    "}`, true);
      this.print(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
  }
  insert = (val) => {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let currentNode = this.root;
    while (true) {
      if (val === currentNode.val) return null;
      if (val > currentNode.val) {
        if (currentNode.right) {
          currentNode = currentNode.right;
        }
        else {
          currentNode.right = newNode;
          break;
        }
      } else {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          currentNode.left = newNode;
          break;
        }
      }
    }
    return this;
  }
  //own solution
  find = (val) => {
    if (!this.root) {
      return undefined;
    }
    let currentNode = this.root;
    if (val === currentNode.val) return currentNode;
    while (currentNode) {
      if (val > currentNode.val) {
        if (val === currentNode.val) {
          return currentNode;
        } else {
          currentNode = currentNode.right;
        }
      } else {
        if (val === currentNode.val) {
          return currentNode
        } else {
          currentNode = currentNode.left;
        }
      }
    }
    return undefined;
  }
  //With more GPT help
  find2 = (val) => {
    if (!this.root) {
      return undefined;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (val === currentNode.val) {
        return currentNode;
      }
      if (val > currentNode.val) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
    }
    return undefined;
  }
  //from course solution with bit change
  find3 = (val) => {
    if (!this.root) {
      return undefined;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (val < currentNode.val) {
        currentNode = currentNode.left;
      } else if (val > currentNode.val) {
        currentNode = currentNode.right;
      } else {
        return currentNode;
      }
    }
    return undefined;
  }
  BFS = () => {
    if (!this.root) {
      return undefined;
    }
    let node = this.root;
    let que = new Queue();
    let visited = [];
    que.enqueue(node);
    while (que.length) {
      node = que.dequeue();
      visited.push(node.val);
      if (node.left) {
        que.enqueue(node.left)
      }
      if (node.right) {
        que.enqueue(node.right);
      }
    }
    return visited;
  }
  DFSPostOrder = () => {
    let current = this.root;
    let data = []

    const traverse = (node) => {
      if (node.left) {
        traverse(node.left)
      }
      if (node.right) {
        traverse(node.right)
      }
      data.push(node.val)
    }
    traverse(current);
    return data;
  }
  DFSInOrder = () => {
    let current = this.root;
    let data = [];
    const traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }
      data.push(node.val);
      if (node.right) {
        traverse(node.right);
      }
    }
    traverse(current);
    return data;
  }
}

const b = new BinarySearchTree();
b.insert(10)
b.insert(6)
b.insert(15)
b.insert(3)
b.insert(8)
b.insert(20)

let list = b.BFS();
console.log(list);
let list2 = b.DFSPostOrder();
console.log(list2);
let list3 = b.DFSInOrder();
console.log(list3);




