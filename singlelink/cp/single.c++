#include <iostream>
#include <optional>
#include <string>

using std::cout;
using std::endl;

template <typename T> class Node {
public:
  T val;
  Node *next;

  // constructor
  Node(const T &val) : val(val), next(nullptr) {}
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

      cout << "Current node: " << current->val << " -Next node: "
           << (current->next ? std::to_string(current->next->val) : "null")
           << endl;
      current = current->next;
    }
  }
  SinglyLinkedList<T> &push(const T &val) {
    Node<T> *newNode = new Node(val);
    if (!head) {
      head = newNode;
      tail = newNode;
    } else {
      tail->next = newNode;
      tail = newNode;
    }
    length++;
    return *this;
  }

  std::optional<Node<T>> pop() {
    if (!head) {
      return std::nullopt; // Return empty optional if list is empty
    }

    Node<T> *oldTail = head;
    Node<T> *newTail = nullptr;

    // Traverse to find the old tail and the new tail
    while (oldTail->next) {
      newTail = oldTail;
      oldTail = oldTail->next;
    }

    // Update tail and handle list length
    if (newTail) {
      newTail->next = nullptr;
      tail = newTail;
    } else {
      head = nullptr; // If newTail is nullptr, the list is empty
    }
    length--;

    // If list is now empty, update tail to nullptr
    if (length == 0) {
      tail = nullptr;
    }

    // Return the popped node
    return *oldTail;
  }
  std::optional<Node<T>> shift() {
    if (!head) {
      return std::nullopt;
    }

    Node<T> *oldHead = head;
    head = oldHead->next;
    oldHead->next = nullptr;
    if (length == 1) {
      head = nullptr;
    }
    length--;
    return *oldHead;
  }
  std::optional<Node<T>> get(int index) {
    if (index < 0 || index >= length) {
      return std::nullopt;
    }
    int count = 0;
    Node<T> *current = head;
    while (index != count) {
      current = current->next;
      count++;
    }
    if (current) {
      return std::optional<Node<T>>(
          current); // Return optional containing the node
    } else {
      return std::nullopt; // Handle case where node at index is not found
                           // (shouldn't normally happen if length is correct)
    }
  }
  ~SinglyLinkedList() {
    Node<T> *current = head;
    while (current) {
      Node<T> *nextNode = current->next;
      delete current;
      current = nextNode;
    }
  }
};

int main(int argc, char const *argv[]) {
  /* code */
  cout << "Singly linkedlist" << endl;
  SinglyLinkedList<int> list;
  list.push(0);
  list.push(1);
  list.push(2);
  std::optional<Node<int>> optionalNode = list.get(1);
  list.print();
  // Check if optionalNode has a value
  if (optionalNode.has_value()) {
    Node<int> item =
        *optionalNode; // Extract the node if optionalNode has a value
    std::cout << "Node at index 1: " << item.val << std::endl;
  } else {
    std::cout << "Index out of bounds or node not found." << std::endl;
  }
  return 0;
}
