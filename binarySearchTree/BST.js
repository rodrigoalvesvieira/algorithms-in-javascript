// Binary Search Tree implementation
//
// @author Rodrigo Alves
// http://en.wikipedia.org/wiki/Binary_search_tree

function BST(value) {
    "use strict";

    this.leftChild = null;
    this.rightChild = null;
    this.key = value || 0;
}

BST.prototype.insert = function (value) {
    "use strict";

    var node = new BST(value);

    if (this.key === 0) {
        this.key = value;
    } else if (value < this.key) {
        if (this.leftChild === null) {
            this.leftChild = node;
        } else {
            this.leftChild.insert(value);
        }
    } else {
        if (this.rightChild === null) {
            this.rightChild = node;
        } else {
            this.rightChild.insert(value);
        }
    }

    return node;
};

BST.prototype.deleteMin = function () {
    "use strict";

    var r = new BST();

    if (this.leftChild === null) {
        r = this.rightChild;
        return r;
    } else {
        this.leftChild = this.leftChild.deleteMin();
        return this;
    }
};

BST.prototype.delete = function (value) {
    "use strict";
    var r = new BST(),
        smaller = new BST();

    if (this === null) {
        return null;
    } else if (this.key > value) {
        this.leftChild = this.leftChild.delete(value);
        return this;
    } else if (this.key < value) {
        this.rightChild = this.rightChild.delete(value);
        return this;
    } else { // two children nodes

        if (this.leftChild !== null && this.rightChild !== null) {
            smaller = this.leftChild;
            this.rightChild.leftChild = smaller;
            r = this.rightChild;
            return r;
        }

        if (this.leftChild === null) {
            r = this.rightChild;
        } else if (this.rightChild === null) {
            r = this.leftChild;
        } else {
            this.rightChild = this.rightChild.deleteMin();
            this.key = value;
        }

        return r;
    }
};

// Visits root
// Visits left child
// Visits right child
BST.preOrder = function (root) {
    "use strict";

    if (root !== null) {
        console.log(root.key + " ");
        BST.preOrder(root.leftChild);
        BST.preOrder(root.rightChild);
    }
};

// Visits left child
// Visits root
// Visits right child
BST.inOrder = function (root) {
    "use strict";

    if (root !== null) {
        BST.preOrder(root.leftChild);
        console.warn(root.key + " ");
        BST.preOrder(root.rightChild);
    }
};

// Visits left child
// Visits right child
// Visits root
BST.postOrder = function (root) {
    "use strict";

    if (root !== null) {
        BST.preOrder(root.leftChild);
        BST.preOrder(root.rightChild);
        console.log(root.key + " ");
    }
};

function main() {
    "use strict";

    var tree = new BST(10),
        inputs = [90, 12, 41, 3, 104];

    inputs.forEach(function (number) {
        tree.insert(number);
    });

    BST.inOrder(tree);

    tree.delete(12);

    BST.inOrder(tree);
}

main();