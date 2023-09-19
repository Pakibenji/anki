function after(count, func) {
    var counter = 0;
    function sayHello() {
        counter++;
        if (count === counter) {
            func();
        }
    }
    return sayHello;
}
// /*** Uncomment these to check your work! ***/
var called = function () { console.log('hello'); };
var afterCalled = after(3, called);
afterCalled(); // => nothing is printed
afterCalled(); // => nothing is printed
afterCalled(); // => 'hello' is printed
