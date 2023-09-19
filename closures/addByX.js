function addByX(x) {
    function addByN(n) {
        var sum = x + n;
        console.log(sum);
    }
    return addByN;
}
var addByTwo = addByX(2);
addByTwo(1); // => should return 3
addByTwo(2); // => should return 4
addByTwo(3); // => should return 5
var addByThree = addByX(3);
addByThree(1); // => should return 4
addByThree(2); // => should return 5
var addByFour = addByX(4);
addByFour(4); // => should return 8
addByFour(5); // => should return 9
