#include <iostream>
#include <string>

using std::cout;
using std::endl;

class Student {
private:
  std::string first_name;
  std::string last_name;
  int age;

public:
  // Constructor with member initializer list
  Student(const std::string &first_name, const std::string &last_name, int age)
      : first_name(first_name), last_name(last_name), age(age) {}

  // Getter functions marked as const
  std::string get_first_name() const { return first_name; }
  std::string get_last_name() const { return last_name; }
  int get_age() const { return age; }

  // Setter functions taking const references for strings
  void set_first_name(const std::string &first_name) {
    this->first_name = first_name;
  }
  void set_last_name(const std::string &last_name) {
    this->last_name = last_name;
  }
  void set_age(int age) { this->age = age; }
};

void print_student_info(const Student &student) {
  // We can call const member functions on const references
  cout << "Student name: " << student.get_first_name() << " "
       << student.get_last_name() << endl;
  cout << "Student age: " << student.get_age() << endl;
}

int main() {
  Student saudaba("last", "kabada", 15);
  saudaba.set_first_name("first");
  print_student_info(saudaba);
  return 0;
}
