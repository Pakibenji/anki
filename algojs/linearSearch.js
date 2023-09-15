"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linearSearch = void 0;
function linearSearch(arr, searchedNumber) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === searchedNumber) {
            return true;
        }
    }
    return false;
}
exports.linearSearch = linearSearch;
console.log(linearSearch([0, 2, 59, 88], 100));
console.log(linearSearch([0, 2, 59, 88], 88));
console.log(linearSearch([2, 5, 85, 120], 2));
