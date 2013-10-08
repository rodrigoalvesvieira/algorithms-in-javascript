// Binary Search Tree implementation
//
// @author Rodrigo Alves @ CIn/UFPE
// http://en.wikipedia.org/wiki/Binary_search_tree

function BST (value) {
    "use strict";

    this.left = null;
    this.right = null;
    this.key = value || 0;
};

BST.prototype.insert = function (value) {
    "use strict";

    var node = new BST(value);

    if (this.key == 0) {
        this.key = value;
    } else if (value < this.key) {
        if (this.left == null) {
            this.left = node;
        } else {
            this.left.insert(value);
        }
    } else {
        if (this.right == null) {
            this.right = node;
        } else {
            this.right.insert(value);
        }
    }

    return node;
};

BST.prototype.deleteMin = function () {
    "use strict";

    var r = new BST();

    if (this.left == null) {
        r = this.right;
        return r;
    } else {
        this.left = this.left.deleteMin();
        return this;
    }
};

BST.prototype.delete = function (value) {
    "use strict";
    var r = new BST(),
        smaller = new BST();

    if (this == null) {
        return null;
    } else if (this.key > value) {
        this.left = this.left.delete(value);
        return this;
    } else if (this.key < value) {
        this.right = this.right.delete(value);
        return this;
    } else { // two children nodes

        if (this.left != null && this.right != null) {
            smaller = this.left;
            this.right.left = smaller;
            r = this.right;
            return r;
        }

        if (this.left == null) {
            r = this.right;
        } else if (this.right == null) {
            r = this.left;
        } else {
            this.right = this.right.deleteMin();
            this.key = value;
        }

        return r;
    }
};

BST.preOrder = function (root) {
    "use strict";

    if (root != null) {
        console.log(root.key + " ");
        BST.preOrder(root.left);
        BST.preOrder(root.right);
    }
};

BST.inOrder = function (root) {
    "use strict";

    if (root != null) {
        BST.preOrder(root.left);
        console.warn(root.key + " ");
        BST.preOrder(root.right);
    }
};

BST.postOrder = function (root) {
    "use strict";

    if (root != null) {
        BST.preOrder(root.left);
        BST.preOrder(root.right);
        console.log(root.key + " ");
    }
};

function main() {
    "use strict";

    var tree = new BST(10);

    var inputs = [90, 12, 41, 3, 104];

    inputs.forEach(function (number) {
        tree.insert(number);
    });

    BST.inOrder(tree);

    tree.delete(12);

    BST.inOrder(tree);
};

main();