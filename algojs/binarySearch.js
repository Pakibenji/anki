"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function binarySearch(arr, searchedNumber) {
    var lo = 0;
    var hi = arr.length;
    do {
        var middle = Math.floor(lo + (hi - lo) / 2);
        var searchedValue = arr[middle];
        if (searchedValue === searchedNumber) {
            return true;
        }
        else if (searchedValue > searchedNumber) {
            hi = middle;
        }
        else {
            lo = middle + 1;
        }
    } while (lo < hi);
    return false;
}
exports.default = binarySearch;
console.log(binarySearch([0, 2, 59, 88, 90], 100));
console.log(binarySearch([0, 2, 59, 88], 88));
console.log(binarySearch([2, 5, 85, 120, 150, 160, 180, 190], 5));
