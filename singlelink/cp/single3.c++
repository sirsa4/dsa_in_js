#include <iostream>
using std::cout;
using std::endl;

template <typename T> class Node {
private:
  T val;
  Node<T> *next;

public:
  Node(T val) : val(val), next(nullptr) {}

  // getter
  T get_val() const { return val; }
  Node<T> *get_next() { return next; }

  // Setters
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
  ~SinglyLinkedList() {
    Node<T> *current_node = head;
    while (current_node) {
      Node<T> *next_node = current_node->get_next();
      delete current_node;
      current_node = next_node;
    }
  }
  void print() {
    Node<T> *current_node = head;
    while (current_node) {
      cout << "Current node: " << current_node->get_val();
      if (current_node->get_next()) {
        cout << " - Next node: " << current_node->get_next()->get_val();
      } else {
        cout << " - Next node: Null";
      }
      std::cout << " - Length: " << length << std::endl;
      current_node = current_node->get_next();
    }
  }
  SinglyLinkedList<T> &push(const T &val) {
    Node<T> *new_node = new Node(val);
    if (!head) {
      this->head = new_node;
      this->tail = new_node;
    } else {
      this->tail->set_next(new_node);
      tail = new_node;
    }
    length++;
    return *this;
  }
  SinglyLinkedList<T> &unshift(const T &val) {
    Node<T> *new_node = new Node(val);
    if (!head) {
      this->head = new_node;
      this->tail = new_node;
    } else {
      new_node->set_next(head);
      head = new_node;
    }
    length++;
    return *this;
  }
  Node<T> *get(int index) {
    if (index < 0 || index >= length) {
      return nullptr;
    }
    Node<T> *found_node = head;
    int count = 0;
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
    Node<T> *new_tail = nullptr;
    Node<T> *removed_node = head;
    while (removed_node->get_next()) {
      new_tail = removed_node;
      removed_node = removed_node->get_next();
    }
    if (new_tail) {
      new_tail->set_next(nullptr);
      tail = new_tail;
    } else {
      head = nullptr;
      tail = nullptr;
    }
    length--;
    return removed_node;
  }
  Node<T> *shift() {
    if (!head) {
      return nullptr;
    }
    Node<T> *old_head = head;
    head = old_head->get_next();
    old_head->set_next(nullptr);
    // delete old_head;
    length--;
    return old_head;
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
    if (!head) {
      return false;
    }
    if (index < 0 || index > length) {
      return false;
    }
    if (index == length) {
      this->pop();
      return true;
    }
    if (index == 0) {
      this->shift();
      return true;
    }
    Node<T> *prev_node = this->get(index - 1);
    if (!prev_node) {
      return false;
    }
    Node<T> *removed_node = prev_node->get_next();
    if (removed_node) {
      prev_node->set_next(removed_node->get_next());
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
    // swap head an tail first
    Node<T> *current_node = head;
    head = tail;
    tail = current_node;
    Node<T> *next_node = nullptr;
    Node<T> *prev_node = nullptr;
    while (current_node) {
      next_node = current_node->get_next();
      current_node->set_next(prev_node);
      // move pointers for next iteration
      prev_node = current_node;
      current_node = next_node;
    }
    return true;
  }
};

int main(int argc, char *argv[]) {
  cout << "-------------Single linkedlist 3------------------------" << endl;
  SinglyLinkedList<int> list;
  list.push(0);
  list.push(1).push(2).push(3);
  list.reverse();
  Node<int> *item = list.get(0);
  if (item) {
    std::cout << "Found at index: " << item->get_val() << endl;
  } else {
    std::cout << "No item found at index" << endl;
  }
  list.print();
  return 0;
}
