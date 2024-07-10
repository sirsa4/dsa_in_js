#include <iostream>
using std::cout;
using std::endl;
template <typename T> void countdown(T val) {
  if (val >= 0) {
    cout << "value: " << val << endl;
    countdown(val - 1);
  }
};
int main(int argc, char *argv[]) {
  cout << "--------------------recursion------------------" << endl;
  countdown(5);
  return 0;
}
