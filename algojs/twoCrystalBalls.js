"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function two_crystal_balls(breaks) {
    var jmpAmount = Math.floor(Math.sqrt(breaks.length));
    var i = jmpAmount;
    console.log('jmp =' + i);
    for (; i < breaks.length; i += jmpAmount) {
        if (breaks[i]) {
            console.log('1stloop:' + i);
            break;
        }
    }
    console.log('end loop' + i);
    i -= jmpAmount;
    for (var j = 0; j < jmpAmount && i < breaks.length; ++j, ++i) {
        if (breaks[i]) {
            return i;
            console.log('2nd loop' + i);
        }
    }
    return -1;
}
exports.default = two_crystal_balls;
var array1 = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
];
var array2 = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
];
var array3 = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    true,
];
var array4 = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    true,
];
console.log(two_crystal_balls(array4));
