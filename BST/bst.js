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
      console.log(prefix + (isLeft ? "├── " : "└── ") + node.val);
      this.print(node.left, prefix + (isLeft ? "│   " : "    "), true);
      this.print(node.right, prefix + (isLeft ? "│   " : "    "), false);
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
      //return null if value already exists, retur null to avoid infinite loop
      if (val === currentNode.val) return null;
      if (val >= currentNode.val) {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
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
      find = (val) => {
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
    }

    console.log("new node added")
    return this;
  }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(13);
bst.insert(2);
bst.insert(7);
bst.insert(11);
bst.insert(16);
bst.insert(3);
bst.print();
