#include <iostream>
#include <stdexcept> // for std::out_of_range
using std::cout;
using std::endl;
// Define a Node class for the linked list
template <typename T> class Node {
private:
  T val; // Data member renamed from data to val
  Node *next;

public:
  Node(T val) : val(val), next(nullptr) {}

  // Accessor method to get the value of val
  T getVal() const { return val; }

  // Allow LinkedList class to access private members
  template <typename U> friend class LinkedList;
};

// Define the LinkedList class
template <typename T> class LinkedList {
private:
  Node<T> *head;
  Node<T> *tail; // Pointer to the last node

public:
  LinkedList() : head(nullptr), tail(nullptr) {}

  ~LinkedList() {
    // Destructor to delete all nodes
    Node<T> *current = head;
    Node<T> *next;
    while (current->next) {
      next = current->next;
      delete current;
      current = next;
    }
    head = nullptr;
    tail = nullptr;
  }

  // Method to insert an element at the end of the list
  LinkedList<T> &push(T val) {
    Node<T> *newNode = new Node<T>(val);
    if (head == nullptr) {
      // If list is empty
      head = newNode;
      tail = newNode;
    } else {
      tail->next = newNode;
      tail = newNode;
    }
    return *this;
  }

  // Method to remove the last element from the list and return the removed node
  Node<T> *pop() {
    if (head == nullptr) {
      std::cerr << "List is empty. Cannot pop.\n";
      return nullptr;
    }
    Node<T> *removedNode;
    if (head == tail) {
      // Only one element in the list
      removedNode = head;
      head = nullptr;
      tail = nullptr;
    } else {
      // Traverse to second last node
      Node<T> *current = head;
      while (current->next != tail) {
        current = current->next;
      }
      removedNode = tail;
      tail = current;
      tail->next = nullptr;
    }
    return removedNode;
  }

  // Method to retrieve a Node at index i
  Node<T> *get(int index) const {
    if (head == nullptr) {
      throw std::out_of_range("List is empty");
    }
    Node<T> *foundNode = head;
    int count = 0;
    while (count != index) {
      foundNode = foundNode->next;
      count++;
    }
    return foundNode;
  }

  // Method to print all elements in the list
  void print() const {
    Node<T> *current = head;
    while (current != nullptr) {
      std::cout << current->getVal() << " "; // Use accessor method to print val
      current = current->next;
    }
    std::cout << "\n";
  }
};

int main() {
  // Example usage of the LinkedList class with integers
  LinkedList<int> intList;
  intList.push(1).push(2).push(3);
  intList.print(); // Output: 1 2 3

  // Example usage of the get method to retrieve a Node
  Node<int> *itemNode = intList.get(1); // Get the Node at index 1
  std::cout << "Item at index 1: " << itemNode->getVal()
            << "\n"; // Output: Item at index 1: 2

  cout << "--------------------------------------------------------------"
       << endl;
  // Example usage of the LinkedList class with strings
  LinkedList<std::string> stringList;
  stringList.push("Hello").push("world");
  stringList.print(); // Output: Hello world
  // Example usage of the get method to retrieve a Node
  Node<std::string> *itemNodeStr = stringList.get(0); // Get the Node at index 0
  std::cout << "Item at index 0: " << itemNodeStr->getVal()
            << "\n"; // Output: Item at index 0: Hello

  return 0;
}
