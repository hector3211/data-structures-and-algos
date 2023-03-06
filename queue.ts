type ANode<T> = {
  next: ANode<T>;
  value: T;
};

class Queue<T> {
  head: ANode<T> | undefined;
  tail: ANode<T> | undefined;
  length: number;

  constructor() {
    this.head = this.tail = undefined;
    this.length = 0;
  }

  enqueue(item: T) {
    const new_node = { value: item } as ANode<T>;
    this.length++;
    if (!this.tail) {
      this.tail = this.head = new_node;
      return;
    }
    const tail = this.tail;
    this.tail.next = new_node;
    this.tail = new_node;
    return tail.value;
  }

  deque() {
    if (!this.head) {
      return;
    }
    this.length--;
    const head = this.head;
    this.head = this.head.next;
    return head.value;
  }

  get_all() {
    if (!this.head) {
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

let que = new Queue();
que.enqueue(10);
que.enqueue(11);
que.enqueue(12);
que.get_all();
