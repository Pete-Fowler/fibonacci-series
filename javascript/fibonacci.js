function fibonacci(num) {
  // let a = 0;
  // let b = 1;
  // let c;
  // if (num === 0) {return 0};
  // for(let i = 1; i < num; i++) {
  //   c = a + b;
  //   a = b;
  //   b = c;
  // }
  // return c;
  if(num < 2) {
    return num;
  }
  else {
    return fibonacci(num-1) + fibonacci(num - 2);
  }
}

/*
PROBLEM: Given n, return nth number in fibonnacci sequence. The sequence starts with 0, 1,
and each of the following numbers is the sum of the previous two.

APPROACH:
N is passed into the function
build a loop, that starts with a = 0, and b = 1, and goes until n is reached.
  on each pass, c = a + b, a = b, b = c
*/

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

