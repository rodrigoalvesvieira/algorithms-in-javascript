// Max Heap (binary) implementation
// @author Rodrigo Alves
// Based on implementation by Robert Sedgewick and Kevin Wayne at Princeton
//
// http://en.wikipedia.org/wiki/Binary_heap

function MaxHeap() {
    "use strict";
    this.array = [];
    this.size = 0;
}

MaxHeap.prototype.isEmpty = function () {
    "use strict";
    return this.size === 0;
};

MaxHeap.prototype.smaller = function (i, j) {
    "use strict";
    return this.array[i] < this.array[j];
};

MaxHeap.prototype.max = function () {
    "use strict";
    return this.array[1];
};

MaxHeap.prototype.sink = function (n) {
    "use strict";

    while (n * 2 <= this.size) {
        var j = 2 * n;
        if (j < this.size && this.smaller(j, j + 1)) {
            j = j + 1;
        }

        if (!this.smaller(n, j)) break;

        this._exchange(n, j);
        n = j;
    }
};

MaxHeap.prototype.insert = function (n) {
    "use strict";

    this.array[this.size + 1] = n;
    this.bubbleUp(this.size);
};

MaxHeap.prototype.extractMax = function () {
    "use strict";

    var max = this.array[1];
    this._exchange(1, this.size--);
    this.sink(1);
    return max;
};

MaxHeap.prototype.bubbleUp = function (n) {
    "use strict";

    while (n > 1 && this.smaller(n / 2, n)) {
        this._exchange(n, n / 2);
        n = n / 2;
    }
};

// This is supposed to be a internal function
// and not to be used outside of this class
// For JSLint use: jslint --nomen MaxHeap.js
MaxHeap.prototype._exchange = function (i, j) {
    "use strict";

    var swap = this.array[i];
    this.array[i] = this.array[j];
    this.array[j] = swap;
};

MaxHeap.prototype.print = function () {
    "use strict";
    var i;

    for (i = 1; i <= this.size; i = i + 1) {
        console.log(this.array[i] + " ");
    }

    console.log("\n");
};

function main() {
    "use strict";

    var heap = new MaxHeap(),
        inputs = [10, 20, 30, 40, 100, 50, 60, 70, 80, 90, 190];

    inputs.forEach (function (integer) {
        heap.insert(integer);
    });

    heap.print();
}

main();