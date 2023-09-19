"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function bubble_sort(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                var tmp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = tmp;
            }
        }
    }
    console.log(arr);
}
exports.default = bubble_sort;
var array = [7, 6, 1, 2, 12, 22, 3, 40, 800, 66, 21, 23, 340, 46];
bubble_sort(array);
