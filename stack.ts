type ANode<T> = {
  prev: ANode<T>;
  value: T;
};

class Stack<T> {
  head: ANode<T> | undefined;
  length: number;

  constructor() {
    this.head = undefined;
    this.length = 0;
  }

  push(item: T) {
    const new_node = { value: item } as ANode<T>;
    this.length++;
    if (!this.head) {
      this.head = new_node;
      return;
    }
    new_node.prev = this.head;
    this.head = new_node;
    return;
  }

  pop() {
    if (!this.head) {
      return;
    }
    this.length--;
    this.head = this.head.prev;
  }

  get_all() {
    if (!this.head) {
      return;
    }
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.prev;
    }
  }
}

let st = new Stack();
st.push(10);
st.push(11);
st.push(12);
st.get_all();
console.log(`Popped!`);
st.pop();
st.get_all();
