#include <iostream>
using std::cout;
using std::endl;

template <typename T> class Node {
private:
  T val;
  Node<T> *next;
  Node<T> *prev;

public:
  Node(T val) : val(val), next(nullptr), prev(nullptr) {}

  // Getters
  T get_val() const { return val; }
  Node<T> *get_next() const { return next; }
  Node<T> *get_prev() const { return prev; }

  // setters
  void set_val(T &val) { this->val = val; }
  void set_next(Node<T> *next) { this->next = next; }
  void set_prev(Node<T> *prev) { this->prev = prev; }
};

template <typename T> class DoublyLinkledList {
private:
  Node<T> *head;
  Node<T> *tail;
  int length;

public:
  DoublyLinkledList() : head(nullptr), tail(nullptr), length(0) {}
  ~DoublyLinkledList() {
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
};

int main(int argc, char *argv[]) {
  cout << "-------------Double linkedlist--------------" << endl;
  DoublyLinkledList<int> list;
  return 0;
}
