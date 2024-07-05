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
};

int main(int argc, char *argv[]) {
  cout << "-------------Singely linkedlist try 2-----------" << endl;
  SinglyLinkedList<int> list;
  list.push(0);
  list.push(1);
  list.push(2);
  list.push(3);
  list.push(4);
  list.shift();
  list.shift();
  list.shift();
  list.shift();
  Node<int> *item = list.get(0);
  Node<int> *removed_item = list.pop();
  cout << "item: " << removed_item->get_val() << endl;
  list.print();
  return 0;
}
