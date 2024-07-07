#include <iostream>
using std::cout;
using std::endl;

template <typename T> class Node {
private:
  T val;
  Node<T> *next;
  Node<T> *prev;
  // can be used instead of getters and setters
  // template <typename u> friend class DoublyLinkedList;

public:
  Node(T val) : val(val), next(nullptr), prev(nullptr) {}

  // Getters
  T get_val() const { return val; }
  Node<T> *get_next() const { return next; }
  Node<T> *get_prev() const { return prev; }

  // setters
  void set_val(const T &val) { this->val = val; }
  void set_next(Node<T> *next) { this->next = next; }
  void set_prev(Node<T> *prev) { this->prev = prev; }
};

template <typename T> class DoublyLinkedList {
private:
  Node<T> *head;
  Node<T> *tail;
  int length;

public:
  DoublyLinkedList() : head(nullptr), tail(nullptr), length(0) {}
  ~DoublyLinkedList() {
    Node<T> *current_node = head;
    while (current_node) {
      Node<T> *next_node = current_node->get_next();
      delete current_node;
      current_node = next_node;
    }
  }
  // Getters
  Node<T> *get_head() const { return head; }
  Node<T> *get_tail() const { return tail; }
  int get_length() const { return length; }

  // setters
  void set_head(Node<T> *head) { this->head = head; }
  void set_tail(Node<T> *tail) { this->tail = tail; }
  void set_length(int &length) { this->length = length; }

  void print() {
    Node<T> *current_node = head;
    while (current_node) {
      std::cout << "Current node: " << current_node->get_val();
      if (current_node->get_prev()) {
        std::cout << " - Prev node: (" << current_node->get_prev()->get_val()
                  << ")";
      } else {
        std::cout << " - Prev node: (No previous node!)";
      }
      if (current_node->get_next()) {
        std::cout << " - Next node: (" << current_node->get_next()->get_val()
                  << ")";
      } else {
        std::cout << " -Next node: (No next node!)";
      }
      std::cout << std::endl;
      current_node = current_node->get_next();
    }
  }
  DoublyLinkedList<T> &push(const T &val) {
    Node<T> *new_node = new Node(val);
    if (!head) {
      head = new_node;
      tail = new_node;
    } else {
      // point new_node to null since it will be new last node or tail of the
      // linklist
      new_node->set_next(nullptr);
      // point back new_node to current tail of list
      new_node->set_prev(tail);
      // point current tail to new_node which will be the new last node
      tail->set_next(new_node);
      // finally make new_node the tail of the entire linkedlist
      tail = new_node;
    }
    length++;
    return *this;
  }
  Node<T> *pop() {
    if (!head) {
      return nullptr;
    }
    Node<T> *old_tail = tail;
    if (head == tail) {
      head = nullptr;
      tail = nullptr;
      return nullptr;
    } else {
      tail = old_tail->get_prev();
      tail->set_next(nullptr);
    }
    old_tail->set_prev(nullptr);
    length--;
    return old_tail;
  }
  Node<T> *shift() {
    if (!head) {
      return nullptr;
    }
    Node<T> *old_head = head;
    if (head == tail) {
      head = nullptr;
      tail = nullptr;
      return nullptr;
    } else {
      head = old_head->get_next();
    }
    old_head->set_next(nullptr);
    length--;
    return old_head;
  }
  Node<T> *unshift(const T &val) {
    Node<T> *new_node = new Node(val);
    if (!head) {
      this->head = new_node;
      this->tail = new_node;
    } else {
      // point new_node to current head
      new_node->set_next(head);
      // point current head node back to new_node
      head->set_prev(new_node);
      // make new node the head of list. this way old head is now second node in
      // the list
      head = new_node;
    }
    length++;
    return new_node;
  }
};

int main(int argc, char *argv[]) {
  cout << "-------------Double linkedlist--------------" << endl;
  DoublyLinkedList<int> list;
  list.push(0);
  list.push(1);
  list.push(2).push(3).push(4);
  list.unshift(-1);
  Node<int> *item = list.pop();
  cout << "popped item: " << item->get_val() << endl;
  list.print();
  return 0;
}
