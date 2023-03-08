type ANode<T> = {
  next: ANode<T> | undefined;
  prev: ANode<T> | undefined;
  value: T;
};

class DoubleList<T> {
  head: ANode<T> | undefined;
  tail: ANode<T> | undefined;
  length: number;

  constructor() {
    this.head = undefined;
    this.tail = undefined;
    this.length = 0;
  }

  prepend(item: T) {
    const new_node = { value: item } as ANode<T>;
    this.length++;
    if (!this.head) {
      this.head = this.tail = new_node;
      return;
    }
    new_node.next = this.head;
    this.head.prev = new_node;
    this.head = new_node;
  }

  append(item: T) {
    const new_node = { value: item } as ANode<T>;
    this.length++;
    if (!this.tail) {
      this.head = this.tail = new_node;
    }
    new_node.prev = this.tail;
    this.tail.next = new_node;
    this.tail = new_node;
  }

  insert_at(idx: T, item: T) {
    const new_node = { value: item } as ANode<T>;
    if (!this.head || idx > this.length) {
      return;
    }
    this.length++;

    if (idx === this.length) {
      this.append(item);
      return;
    }
    if (idx === 0) {
      this.prepend(item);
      return;
    }

    let current = this.head;
    for (let i = 0; current && i < idx; i++) {
      if (current.next) {
        current = current.next;
      }
    }
    console.log(`Adding -- ${item}`);
    new_node.next = current.next;
    new_node.prev = current;
    current.next = new_node;
    if (current.prev) {
      current.prev.next = current;
    }
  }

  remove(item: T) {
    if (!this.head) {
      return;
    }

    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }

    let current = this.head?.next;
    while (current) {
      if (current.value === item) {
        break;
      }
      current = current.next;
    }

    if (!current) {
      return;
    }

    console.log(`Removing: ${item}`);
    this.length--;

    if (current.prev) {
      current.prev.next = current.next;
    }

    if (current.next) {
      current.next.prev = current.prev;
    }
    if (current === this.tail) {
      this.tail = current.prev;
    }
  }

  get_all() {
    if (!this.head) {
      return;
    }
    console.log("Getting nodes...");
    let current = this.head;
    while (current) {
      if (!current.next) {
        console.log(`value -- ${current.value}`);
        break;
      }
      console.log(`value -- ${current.value}`);
      current = current.next;
    }
  }
}

let dlist = new DoubleList();
dlist.prepend(10);
dlist.append(11);
dlist.append(12);
dlist.append(13);
dlist.append(14);
dlist.get_all();
dlist.insert_at(2, 15);
dlist.get_all();
