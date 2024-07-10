#ifndef STACK_HPP
#define STACK_HPP
#include <iostream>
template <typename T> class Node {
private:
  T val;
  Node<T> *next;

public:
  Node(T val) : val(val), next(nullptr) {}
  // Getters
  T get_val() const { return val; }
  Node<T> *get_next() const { return next; }
  // setters
  void set_val(const T &val) { this->val = val; }
  void set_next(Node<T> *next) { this->next = next; }
};

template <typename T> class Stack {
private:
  Node<T> *head;
  int length;

public:
  Stack() : head(nullptr), length(0) {}
  ~Stack() {
    while (head) {
      Node<T> *current = head;
      head = current->get_next();
      delete current;
    }
  }
  void print() {
    if (!this->head) {
      std::cout << "Empty stack" << std::endl;
    }
    Node<T> *current_node = this->head;
    while (current_node) {
      std::cout << "Current node: " << current_node->get_val();
      if (current_node->get_next()) {
        std::cout << " - Next node: " << current_node->get_next()->get_val();
      }
      std::cout << " - length: " << this->length << std::endl;
      current_node = current_node->get_next();
    }
  }
  // FIFO - first in - first out
  // push() which works like unshift() in linkedlist
  Stack<T> &push(const T &val) {
    Node<T> *new_node = new Node<T>(val);
    if (!this->head) {
      this->head = new_node;
    } else {
      new_node->set_next(this->head);
      head = new_node;
    }
    length++;
    return *this;
  }
  // works like shift() removing first
  Node<T> *pop() {
    if (!this->head) {
      return nullptr;
    }
    Node<T> *removed_head = this->head;
    if (this->head == nullptr) {
      return nullptr;
    }
    head = removed_head->get_next();
    removed_head->set_next(nullptr);
    length--;
    return removed_head;
  }
};
#endif // STACK_HPP
