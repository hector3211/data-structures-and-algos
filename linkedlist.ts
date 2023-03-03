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
    if (this.length === 0) {
      return;
    }
    this.length--;
    if (this.head?.value === item) {
      this.head = this.head.next;
      return;
    } else {
      let current = this.head;
      while (current) {
        if (current.value === item) {
          break;
        }
        current = current.next;
      }
      if (!current) {
        return;
      }
      if (current.next) {
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
}

let lst = new List();
lst.add(10);
lst.add(11);
lst.add(12);
lst.get_all();
lst.remove(10);
lst.get_all();
