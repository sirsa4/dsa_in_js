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
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(15);
bst.insert(5);
bst.insert(3);
bst.insert(11);
bst.insert(2);
bst.insert(1);
bst.print();

