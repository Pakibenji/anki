function after(count: number, func: Function) {
  }
  
  // /*** Uncomment these to check your work! ***/
   const called = function() { console.log('hello') };
   const afterCalled = after(3, called);
   afterCalled(); // => nothing is printed
   afterCalled(); // => nothing is printed
   afterCalled(); // => 'hello' is printed