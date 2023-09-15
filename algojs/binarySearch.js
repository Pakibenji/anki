"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function binarySearch(arr, searchedNumber) {
    var lo = 0;
    var hi = arr.length;
    do {
        var middle = Math.floor(lo + (hi - lo) / 2);
        var currentValue = arr[middle];
        console.log("middle:" + middle);
        if (currentValue === searchedNumber) {
            return true;
        }
        else if (currentValue > searchedNumber) {
            hi = middle;
            console.log("hi:" + hi);
        }
        else {
            lo = middle + 1;
            console.log("lo:" + lo);
        }
    } while (lo < hi);
    return false;
}
exports.default = binarySearch;
console.log(binarySearch([0, 2, 59, 88, 90], 100));
// console.log(binarySearch([0, 2, 59, 88], 88));
// console.log(binarySearch([2, 5, 85, 120], 2));
