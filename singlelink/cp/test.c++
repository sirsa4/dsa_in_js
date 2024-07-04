
#include <iostream>

// Node class template
template <typename T>
class Node
{
public:
    T val;      // Data of type T
    Node *next; // Pointer to the next Node

    // Constructor
    Node(const T &value) : val(value), next(nullptr) {}

    // Destructor (if needed)
    // ~Node() {}
};

// SinglyLinkedList class template
template <typename T>
class SinglyLinkedList
{
private:
    Node<T> *head; // Pointer to the head of the list
    Node<T> *tail; // Pointer to the tail of the list
    int length;    // Length of the list

public:
    // Constructor
    SinglyLinkedList() : head(nullptr), tail(nullptr), length(0) {}

    // Method to push a value of type T to the end of the list
    void push(const T &value)
    {
        Node<T> *newNode = new Node<T>(value);
        if (!head)
        {
            // For the first node
            head = newNode;
            tail = newNode;
        }
        else
        {
            // For subsequent nodes
            tail->next = newNode;
            tail = newNode;
        }
        length++;
    }

    // Method to traverse and print all nodes in the list
    void loop() const
    {
        Node<T> *current = head;
        while (current)
        {
            std::cout << current->val << std::endl;
            current = current->next;
        }
    }

    // Destructor to clean up the list (if needed)
    ~SinglyLinkedList()
    {
        Node<T> *current = head;
        while (current)
        {
            Node<T> *nextNode = current->next;
            delete current;
            current = nextNode;
        }
    }
};

int main()
{
    // Usage example
    SinglyLinkedList<int> intList;
    intList.push(10);
    intList.push(20);
    intList.loop();

    SinglyLinkedList<std::string> stringList;
    stringList.push("Hello");
    stringList.push("World");
    stringList.loop();

    return 0;
}
