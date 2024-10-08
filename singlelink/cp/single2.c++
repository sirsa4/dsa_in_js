#include <iostream>
using std::cout;
using std::endl;

template <typename T> class Node {
private:
  T val;
  Node *next;

public:
  Node(T val) : val(val), next(nullptr) {}
  // getter
  T get_val() const { return val; }
  Node *get_next() const { return next; }
  void set_val(const T &val) { this->val = val; }
  void set_next(Node<T> *next) { this->next = next; }
};

template <typename T> class SinglyLinkedList {
private:
  Node<T> *head;
  Node<T> *tail;
  int length;

public:
  SinglyLinkedList() : head(nullptr), tail(nullptr), length(0) {}
  void print() {
    Node<T> *current = head;
    while (current) {
      std::cout << "Current node: " << current->get_val();
      if (current->get_next()) {
        std::cout << " - Next node: " << current->get_next()->get_val();
      } else {
        std::cout << " - Next node: nullptr";
      }
      std::cout << std::endl;
      current = current->get_next();
    }
  }
  SinglyLinkedList<T> &push(const T &val) {
    Node<T> *newNode = new Node(val);
    if (!head) {
      head = newNode;
      tail = newNode;
    } else {
      tail->set_next(newNode);
      tail = newNode;
    }
    length++;
    return *this;
  }
  Node<T> *get(int index) {
    if (index < 0 || index >= length) {
      return nullptr;
    }
    int count = 0;
    Node<T> *found_node = head;
    while (count != index) {
      found_node = found_node->get_next();
      count++;
    }
    return found_node;
  }
  Node<T> *pop() {
    if (!head) {
      return nullptr;
    }
    Node<T> *head_node = head;
    Node<T> *new_tail = nullptr;
    while (head_node->get_next()) {
      new_tail = head_node;
      head_node = head_node->get_next();
    }
    if (new_tail) {
      new_tail->set_next(nullptr);
      tail = new_tail;
    } else {
      head = nullptr;
      tail = nullptr;
    }
    length--;
    return head_node;
  }
  Node<T> *shift() {
    if (!head) {
      return nullptr;
    }
    Node<T> *old_head = head;
    head = old_head->get_next();
    old_head->set_next(nullptr);
    length--;
    return old_head;
  }
  Node<T> *unshift(const T &val) {
    Node<T> *newNode = new Node(val);
    if (!head) {
      head = newNode;
      tail = newNode;
    } else {
      Node<T> *current = head;
      newNode->set_next(current);
      head = newNode;
    }
    return newNode;
  }
  bool set(int index, const T &val) {
    if (index < 0 || index >= length) {
      return false;
    }
    Node<T> *found_node = this->get(index);
    if (found_node) {
      found_node->set_val(val);
      return true;
    }
    return false;
  }
  bool insert(int index, const T &val) {
    if (index < 0 || index > length) {
      return false;
    }
    if (index == length) {
      this->push(val);
      return true;
    }
    if (index == 0) {
      this->unshift(val);
      return true;
    }
    Node<T> *new_node = new Node(val);
    Node<T> *prev_node = this->get(index - 1);
    if (prev_node) {
      new_node->set_next(prev_node->get_next());
      prev_node->set_next(new_node);
      length++;
      return true;
    }
    return false;
  }
  bool remove(int index) {
    if (index < 0 || index > length) {
      return false;
    }
    if (index == length - 1) {
      this->pop();
      return true;
    }
    if (index == 0) {
      this->shift();
      return true;
    }
    Node<T> *prev_node = this->get(index - 1);
    // current node
    Node<T> *removed_node = prev_node->get_next();
    if (removed_node) {
      // point previous node to the after removed one. jumping over
      prev_node->set_next(removed_node->get_next());
      // finally delete removed node from memory
      delete removed_node;
      length--;
      return true;
    }
    return false;
  }
  bool reverse() {
    if (!head) {
      return false;
    }
    // swap current tail and current head of list first
    Node<T> *current_node = head;
    head = tail;
    tail = current_node;
    Node<T> *next_node = nullptr;
    Node<T> *prev_node = nullptr;
    // change pointers in loop
    while (current_node) {
      // store next node temporarily while working on current iteration
      next_node = current_node->get_next();
      // reverse happens here. point current_node to prev_node
      current_node->set_next(prev_node);
      // move prev_node- to current_node in order to reverse in next iteration
      prev_node = current_node;
      // move current node the stored next_node. repeat iteration untill the
      // last node.
      current_node = next_node;
    }
    return true;
  }
};

int main(int argc, char *argv[]) {
  cout << "-------------Singely linkedlist try 2-----------" << endl;
  SinglyLinkedList<int> list;
  list.push(0);
  list.push(1);
  list.push(2);
  list.push(3);
  list.push(4);
  list.insert(1, 12);
  list.remove(2);
  Node<int> *item = list.get(0);
  // Node<int> *removed_item = list.pop();
  cout << "item at index 0: " << item->get_val() << endl;
  list.print();
  return 0;
}
