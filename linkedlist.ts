type ANode<T> = {
  next: ANode<T>;
  value: T;
};

class List<T> {
  head: ANode<T> | undefined;
  length: number;

  constructor() {
    this.head = undefined;
    this.length = 0;
  }

  add(item: T) {
    const new_node = { value: item } as ANode<T>;
    this.length++;
    if (!this.head) {
      this.head = new_node;
    } else {
      let current = this.head;
      while (current) {
        if (!current.next) {
          current.next = new_node;
          return;
        }
        current = current.next;
      }
    }
  }

  remove(item: T) {
    if (!this.head) {
      return;
    }
    if (this.head.value === item) {
      this.length--;
      this.head = this.head.next;
      return;
    } else {
      let current = this.head;
      while (current) {
        if (current.next.value === item) {
          this.length--;
          current.next = current.next.next;
          return;
        }
        current = current.next;
      }
    }
  }

  get_all() {
    if (this.length === 0) {
      return;
    } else {
      let current = this.head;
      while (current) {
        console.log(current.value);
        current = current.next;
      }
    }
  }

  get_length() {
    if (this.length === 0) {
      return;
    } else {
      console.log(`The length: ${this.length}`);
    }
  }
}

let lst = new List();
lst.add(10);
lst.add(11);
lst.add(12);
lst.get_all();
lst.get_length();
console.log("Removing!....");
lst.remove(10);
lst.get_all();
console.log("Removing!....");
lst.remove(11);
lst.get_all();
lst.get_length();
