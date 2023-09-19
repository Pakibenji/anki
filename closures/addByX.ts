function addByX(x: number) {
}

const addByTwo = addByX(2);
addByTwo(1); // => should return 3
addByTwo(2); // => should return 4
addByTwo(3); // => should return 5

const addByThree = addByX(3);
addByThree(1); // => should return 4
addByThree(2); // => should return 5

const addByFour = addByX(4);
addByFour(4); // => should return 8
addByFour(5); // => should return 9

function once(func: Function) {
    let counter = 0;
    let res = undefined;
    function runOnce(num: number) {
      if (counter === 0) {
        res = func(num);
        counter++;
      }
      return res;
    }
    return runOnce;
  }

  const onceFunc = once(addByTwo);
  console.log(onceFunc(4));  // => should log 6
  console.log(onceFunc(10));  // => should log 6
  console.log(onceFunc(9001));  // => should log 6