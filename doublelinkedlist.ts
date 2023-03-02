interface ANode<T> {
  value: T;
  prev: ANode<T>;
  next: ANode<T>;
}

class Bst<T> {
  head?: ANode<T>;
  tail?: ANode<T>;
  length: number;
  constructor() {
    this.length = 0;
    this.head = undefined;
    this.tail = undefined;
  }

  prepend(item: T): void {
    this.length++;
    const newNode = { value: item } as ANode<T>;
    if (!this.head) {
      this.head = this.tail = newNode;
    }
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
  }

  append(item: T): void {
    this.length++;
    const newNode = { value: item } as ANode<T>;
    if (!this.tail) {
      this.tail = this.head = newNode;
    }
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
  }

  remove(item: T): void {
    if (this.length === 0) {
      return;
    }
    let curr = this.head;
    while (curr) {
      if (curr.value === item) {
        break;
      }
      curr = curr.next;
    }
    // once we get our to be deleted node
    this.length--;
    if (!curr) {
      return;
    }
    if (curr.prev) {
      curr.prev.next = curr.next;
    }
    if (curr.next) {
      curr.next.prev = curr.prev;
    }
    if (curr === this.head) {
      this.head = curr.next;
    }
    if (curr === this.tail) {
      this.tail = curr.prev;
    }
  }

  getall(): void {
    if (!this.head) {
      return;
    }
    let curr = this.head;
    while (curr) {
      console.log(curr.value);
      curr = curr.next;
    }
  }
}

const bs = new Bst();
bs.prepend(10);
bs.append(12);
bs.append(13);
bs.append(14);
bs.getall();
bs.remove(12);
console.log("after removed");
bs.getall();
