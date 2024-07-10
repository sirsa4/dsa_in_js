#include "stack.hpp"
#include <iostream>

using std::cout;
using std::endl;

int main() {
  cout << "---------------------------stack 1------------------------" << endl;
  Stack<int> s;
  s.push(0).push(1).push(2).push(3).push(4);
  s.print();
  cout << "-----------------------------" << endl;
  Node<int> *item = s.pop();
  if (item) {
    cout << "Removed item: " << item->get_val() << endl;
  } else {
    cout << "Item is empty" << endl;
  }
  cout << "-----------------------------" << endl;
  s.print();
  return 0;
}
