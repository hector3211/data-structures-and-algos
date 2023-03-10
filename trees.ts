type TNode<T> = {
  left: TNode<T>;
  right: TNode<T>;
  value: T;
};

class Tree<T> {
  root: TNode<T> | undefined;

  constructor() {
    this.root = undefined;
  }

  append(item: T) {
    const new_node = { value: item } as TNode<T>;
    if (!this.root) {
      this.root = new_node;
      return;
    }

    let current = this.root;
    while (current) {
      if (item > current.value) {
        if (!current.right) {
          current.right = new_node;
          return;
        } else {
          current = current.right;
        }
      } else {
        if (!current.left) {
          current.left = new_node;
          return;
        } else {
          current = current.left;
        }
      }
    }
  }

  search(item: T): boolean {
    let current = this.root;
    while (current) {
      if (current.value === item) {
        return true;
      } else if (current.value > item) {
        current = current.right;
      } else {
        current = current.left;
      }
    }
    return false;
  }
}

function in_order<T>(node: TNode<T>): void {
  if (!node) {
    return;
  } else {
    let current = node;
    in_order(current.left);
    console.log(current.value);
    in_order(current.right);
  }
}

let tree = new Tree();
tree.append(10);
tree.append(5);
tree.append(12);
console.log(in_order(tree.root as TNode<number>));
