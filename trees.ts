type TNode<T> = {
    left: TNode<T> | undefined;
    right: TNode<T> | undefined;
    value: T;
};

interface TreeActions<T> {
    append(item: T): void;
    search(item: T): boolean;
}

class Tree<T> implements TreeActions<T> {
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

function in_order(node: TNode<number> | undefined): void {
    if (!node) {
        return;
    } else {
        let current = node;
        in_order(current.left);
        console.log(current.value);
        in_order(current.right);
    }
}

function pre_order(node: TNode<number> | undefined): void {
    if (!node) {
        return;
    } else {
        console.log(node.value);
        pre_order(node.left);
        pre_order(node.right);
    }
}

function post_order(node: TNode<number> | undefined): void {
    if (!node) {
        return;
    } else {
        post_order(node.left);
        post_order(node.right);
        console.log(node.value);
    }
}

// This is probably spelled wrong
function breadthFirstSearch(
    node: TNode<number> | undefined,
    needle: number
): boolean {
    if (!node) {
        return false;
    }

    // creating a queue!
    const que = [node];

    while (que.length) {
        // getting first item in queue as TNode of course!
        const current = que.shift() as TNode<number> | undefined;

        if (current) {
            // check if we get a match!
            if (current.value === needle) {
                return true;
            }
            // if no match!
            // we push in left
            if (current.left) {
                que.push(current.left);
            }
            // we push in right
            if (current.right) {
                que.push(current.right);
            }
        }

    }
    return false;
}

function compareTrees(
    a: TNode<number> | undefined,
    b: TNode<number> | undefined
): boolean {
    if (a === undefined && b === undefined) {
        return true;
    }
    if (a === undefined || b === undefined) {
        return false;
    }
    if (a.value !== b.value) {
        return false;
    }
    return compareTrees(a.left, b.left) && compareTrees(a.right, b.right);
}

let tree = new Tree();
tree.append(10);
tree.append(5);
tree.append(12);

let treeTwo = new Tree();
treeTwo.append(10);
treeTwo.append(5);
treeTwo.append(12);
treeTwo.append(2);

console.log("Pre order...");
pre_order(tree.root as TNode<number>);
console.log("In order...");
in_order(tree.root as TNode<number>);
console.log("Post order...");
post_order(tree.root as TNode<number>);

console.log("Breadth First Search...");
console.log(breadthFirstSearch(tree.root as TNode<number>, 15));
// Compare two trees!
console.log(compareTrees(tree.root as TNode<number>, treeTwo.root as TNode<number>));
