
const countDown = (num) => {
  if (num > 0) {
    console.log(num)
    countDown(num - 1)
  }
}

const sumRange = (num) => {
  if (num < 1) {
    return 1;
  }
  return num + sumRange(num - 1);
}

let sum = sumRange(4);
//sumRange(3)
//1: 3 + (3 -1) = 
//2: 2 + (1) waiting = 3 in end
//3: 1 + (1 -1) return 1
//sumRange(4)
//4 + (4-1) waiting for next = 10
//3 + (3-1) waiting for next = 6
//2 + (2-1) waiting for next = 3
//1 + (1-1) 1
//sumRange(5)
//1: 5 + (5-1) wait for next = 17 
//2: 4 + (4-1) wait for next = 12 
//3: 3+ (3-1) wait for next = 8
//4: 2 + (2-1) wait for next = 5
//5: 2 + (2-1) wait for next = 3 
//6: 1 + (1-1) return 1
console.log(sum);

const fib = (target) => {
  if (target === 1) { return 1 };
  if (target === 0) { return 0 }
  return fib(target - 1) + fib(target - 2);
}

let f = fib(5);
console.log(f);

const summ = (n) => {
  if (n === 0) {
    return 0
  }
  return n + summ(n - 1)
}
console.log("--------------------------------------------------")
let s = summ(5);
console.log(s);

console.log("-------------------grid path--------------------------")

const gridPath = (n, m) => {
  if (n === 1 || m === 1) {
    return 1;
  }
  return gridPath(n, m - 1) + gridPath(n - 1, m);
}

let g = gridPath(3, 3);
console.log(g);
console.log("------------------------------partition---------------------------")
//n: object
//m: partition
const countPartition = (n, m) => {
  //
  if (n === 0) {
    return 1;
  }
  if (m === 0) {
    return 0;
  }
  if (n < 0) {
    return 0;
  }
  return countPartition(n - m, m) + countPartition(n, m - 1);
}
let p = countPartition(9, 5);
console.log(p);

console.log("---------------------factorial-------------------------")
const factorial = (n) => {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

let fc = factorial(4);
console.log(fc);

console.log("---------------------Test-------------------------")

const reverseStr = (str) => {
  if (str === "") {
    return ""
  }

  return reverseStr(str.slice(1)) + str[0];

}

const rs = reverseStr("yahye")
console.log(rs)

console.log("---------------------Power-------------------------")
const powerOf = (base, exponent) => {
  if (base === 0) {
    return 1;
  }
  return base * powerOf(base, exponent - 1)
}

//let pm = powerOf(2, 2)
//console.log(pm);
console.log("------------------------------Helper function recursion-----------------------------------")

const findOdd = (arr) => {
  let = result = [];
  const helper = (data) => {
    if (data.length === 0) {
      return;
    }
    if (data[0] % 2 !== 0) {
      result.push(data[0])
    }
    helper(data.slice(1));
  }
  helper(arr);
  return result;
}

let array = findOdd([1, 2, 3, 4, 5, 6, 7, 8, 9])
console.log(array);

