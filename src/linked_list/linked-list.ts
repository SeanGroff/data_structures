/**
 * Singly Linked List
 */

// Node containing the data and reference to the next Node in the List
class Node<T> {
  public nextNode: Node<T> | null = null;
  constructor(public data: T) {}
}

interface ILinkedList<T> {
  prepend(value: T): Node<T>;
  append(value: T): Node<T>;
  delete(node: Node<T>): void;
  traverse(): T[];
  size(): number;
  // search(comparator: (data: T) => boolean): Node<T> | null;
}

// Singly Linked List Data Structure
export class LinkedList<T> implements ILinkedList<T> {
  private head: Node<T> | null = null;
  private tail: Node<T> | null = null;

  private isListEmpty = !this.head && !this.tail;

  // Prepend Node at Start of LinkedList
  public prepend(value: T): Node<T> {
    const newNode = new Node(value);
    if (this.isListEmpty) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.nextNode = this.head;
      this.head = newNode;
    }
    return newNode;
  }

  // Append Node to End of LinkedList
  public append(value: T): Node<T> {
    const newNode = new Node(value);
    if (this.isListEmpty) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      if (this.tail) {
        this.tail.nextNode = newNode;
      }
      this.tail = newNode;
    }
    return newNode;
  }

  // Deletes the Node in the Linked List
  public delete(node: Node<T>): void {
    if (!this.head) {
      return;
    }
    let prevNode: Node<T> | null = null;
    let currNode: Node<T> | null = this.head;
    while (currNode) {
      if (currNode === node) {
        if (prevNode) {
          prevNode.nextNode = currNode.nextNode;
        }
        return;
      }

      prevNode = currNode;
      currNode = currNode.nextNode;
    }
  }

  // Iterate over Linked List and return all Nodes as an Array
  public traverse(): T[] {
    let currNode = this.head;
    let arr: T[] = [];
    while (currNode) {
      arr.push(currNode.data);
      currNode = currNode.nextNode;
    }
    return arr;
  }

  // TODO: Traverse the Linked List (LinkedList.traverse()) and return length of Array
  public size(): number {
    return this.traverse().length;
  }

  // TODO: Search Linked List for the Node that matches the `comparator` callback function
  // public search(comparatorFn) {}
}
