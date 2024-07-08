#include <iostream>

using std::cout;
using std::endl;

template <typename T> class Node {
private:
  T val;
  Node<T> *left;
  Node<T> *right;

public:
  Node(T val) : val(val), left(nullptr), right(nullptr) {}
  // Getters
  const T &get_val() const { return val; }
  Node<T> *get_left() const { return left; }
  Node<T> *get_right() const { return right; }
  // setters
  void set_val(T &val) { this->val = val; }
  void set_left(Node<T> *left) { this->left = left; }
  void set_right(Node<T> *right) { this->right = right; }
};
template <typename T> class BinarySearchTree {
private:
  Node<T> *root;

public:
  BinarySearchTree() : root(nullptr) {}
  ~BinarySearchTree() { destroyTree(root); }
  void destroyTree(Node<T> *node) {
    if (node) {
      destroyTree(node->get_right());
      destroyTree(node->get_left());
      delete node;
    }
  }

  void print(Node<T> *node, std::string prefix, bool isLeft) {
    if (node != nullptr) {
      std::cout << prefix << (isLeft ? "├── " : "└── ") << node->get_val()
                << std::endl;
      print(node->get_left(), prefix + (isLeft ? "│   " : "    "), true);
      print(node->get_right(), prefix + (isLeft ? "│   " : "    "), false);
    }
  }
  void print() { print(root, "", true); }
  BinarySearchTree<T> &insert(const T &val) {
    Node<T> *new_node = new Node(val);
    if (!root) {
      root = new_node;
      return *this;
    }
    Node<T> *current_node = this->root;
    while (true) {
      if (val == current_node->get_val()) {
        delete new_node;
        return *this;
      }
      if (val < current_node->get_val()) {
        if (current_node->get_left()) {

          current_node = current_node->get_left();
        } else {
          current_node->set_left(new_node);
          break;
        }
      } else if (val > current_node->get_val()) {
        if (current_node->get_right()) {

          current_node = current_node->get_right();
        } else {
          current_node->set_right(new_node);
          break;
        }
      }
    }
    return *this;
  }
  Node<T> *find(const T &val) {
    if (!root) {
      return nullptr;
    }
    Node<T> *current_node = root;
    while (current_node) {
      if (val == current_node->get_val()) {
        return current_node;
      }
      if (val < current_node->get_val()) {
        current_node = current_node->get_left();
      } else {
        current_node = current_node->get_right();
      }
    }
    return nullptr;
  }
};

int main() {
  cout << "----------------BST--------------------------" << endl;
  BinarySearchTree<int> b;
  b.insert(10);
  b.insert(5).insert(3).insert(2).insert(4);
  b.insert(15).insert(12).insert(14).insert(11).insert(13);
  b.print();
  cout << "-----------------------------------" << endl;
  Node<int> *node = b.find(300);
  if (node) {
    cout << "Node: " << node->get_val() << endl;
  } else {
    cout << "No item found" << endl;
  }
  return 0;
}
