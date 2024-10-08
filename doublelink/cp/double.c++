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
        std::cout << " -Next node: (No next node!) - length: (" << length
                  << ")";
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
  Node<T> *get(int index) {
    if (index < 0 || index >= length) {
      return nullptr;
    }
    Node<T> *current_node;
    int count = 0;
    if (index <= length / 2) {
      current_node = head;
      count = 0;
      while (count != index) {
        current_node = current_node->get_next();
        count++;
      }
    } else {
      current_node = tail;
      count = length - 1;
      while (count != index) {
        current_node = current_node->get_prev();
        count--;
      }
    }
    return current_node;
  }
  bool set(int index, const T &val) {
    if (!head) {
      return false;
    }
    if (index < 0 || index >= length) {
      return false;
    }
    Node<T> *found_node = this->get(index);
    if (found_node) {
      found_node->set_val(val);
      return true;
    }
    return false;
    /*
        // rewrite get() logic for practice
        Node<T> *found_node;
        int count;
        if (index < length / 2) {
          found_node = head;
          count = 0;
          while (index != count) {
            found_node = found_node->get_next();
            count++;
          }
        } else {
          found_node = tail;
          count = length - 1;
          while (count != index) {
            found_node = found_node->get_prev();
            count--;
          }
        }
        found_node->set_val(val);
        return true;
        */
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
      // Store the next node incase it is nullptr and leads to undefined
      // behaviour
      Node<T> *next_node = prev_node->get_next();
      // point new_node to the node next to prev_node
      new_node->set_next(next_node);
      // point new_node back to previous node. new_node is taking place that was
      // next previous node before
      new_node->set_prev(prev_node);
      // point prev_node to new_node. now new_node has been inserted
      //  between prev_node and the node next to it.
      prev_node->set_next(new_node);
      // check if next_node is not nullptr or exists
      if (next_node) {
        // point the node that was next prev_node before now back to the
        // new_node instead  new_node->set_next(next_node);
        next_node->set_prev(new_node);
      }
    }
    length++;
    return true;
  }
  bool remove(int index) {
    if (index < 0 || index >= length) {
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
    // get the needed nodes
    Node<T> *prev_node = this->get(index - 1);
    Node<T> *node_to_remove = prev_node->get_next();
    Node<T> *next_node = node_to_remove->get_next();
    // point prev_node to the new next_node-
    prev_node->set_next(next_node);
    if (next_node) {
      // point next_node back to prev_node
      next_node->set_prev(prev_node);
    }
    node_to_remove->set_next(nullptr);
    node_to_remove->set_prev(nullptr);
    delete node_to_remove;
    length--;
    return true;
  }
};

int main(int argc, char *argv[]) {
  cout << "-------------Double linkedlist--------------" << endl;
  DoublyLinkedList<int> list;
  list.push(0);
  list.push(1);
  list.push(2222).push(33).push(44);
  list.remove(2);
  Node<int> *item = list.get(-1);
  if (item) {
    cout << "get item: " << item->get_val() << endl;
  } else {
    std::cout << "index is out of bound index" << std::endl;
  }
  list.print();
  return 0;
}
