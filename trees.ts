type TNode<T> = {
    left: TNode<T> | undefined;
    right: TNode<T> | undefined;
    value: T;
};

interface TreeActions<T> {
    insert(item: T): void;
}

class Tree<T> implements TreeActions<T> {
    root: TNode<T> | undefined;

    constructor() {
        this.root = undefined;
    }

    insert(item: T) {
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
}

function deletion(node: TNode<number> | undefined, item: number): void {
    node = deleteNode(node, item);
}

function deleteNode(node: TNode<number> | undefined, item: number): TNode<number> | undefined {
    if (!node) {
        return;
    }

    // once we find the node that has our value
    if (node.value === item) {
        // if no children we return, this means we cant delete!
        if (!node.left && !node.right) {
            return;
        }
        // if nothing on the left we return right
        if (!node.left) {
            return node.right;
        }
        // if nothing on the right we return left
        if (!node.right) {
            return node.left;
        }

        // find smallest node in right subtree
        const smallestNodeValue = findSmallestNode(node.right);
        // replace current nodes value with the smallest
        node.value = smallestNodeValue;
        // we keep going right to find the biggest but smalled value on the right subtrees
        node.right = deleteNode(node.right, smallestNodeValue);
        return node;
    } else if (item > node.value) {
        // recursion
        node.right = deleteNode(node.right, item);
        return node;
    } else {
        // recursion
        node.left = deleteNode(node.left, item);
        return node;
    }

}

function findSmallestNode(node: TNode<number>): number {
    while (node.left) {
        node = node.left;
    }

    return node.value;
}

function search(node: TNode<number> | undefined, item: number): boolean {
    if (!node) {
        return false;
    } else {
        let current = node;
        while (current) {
            console.log(`current valur: - ${current.value}`);
            if (current.value === item) {
                return true;
            } else if (current.value > item) {
                current = current.left as TNode<number>;
            } else {
                current = current.right as TNode<number>;
            }

        }
    }
    return false;
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
tree.insert(17);
tree.insert(15);
tree.insert(4);
tree.insert(16);
tree.insert(50);
tree.insert(25);
tree.insert(60);
tree.insert(45);
tree.insert(35);
tree.insert(58);
console.log("In order...");
in_order(tree.root as TNode<number>);
// console.log(`search:- ${search(tree.root as TNode<number>, 12)}`);
console.log(`Deletion of NODE-- ${deletion(tree.root as TNode<number>, 45)}`)

let treeTwo = new Tree();
treeTwo.insert(10);
treeTwo.insert(5);
treeTwo.insert(12);
treeTwo.insert(2);

// console.log("Pre order...");
// pre_order(tree.root as TNode<number>);
console.log("In order...");
in_order(tree.root as TNode<number>);
// console.log("Post order...");
// post_order(tree.root as TNode<number>);

// console.log("Breadth First Search...");
// console.log(breadthFirstSearch(tree.root as TNode<number>, 15));
// // Compare two trees!
// console.log(compareTrees(tree.root as TNode<number>, treeTwo.root as TNode<number>));
