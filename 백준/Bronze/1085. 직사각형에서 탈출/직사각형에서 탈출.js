let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let [x,y,w,h] = input;
let arr = [];

arr.push(x);
arr.push(y);
arr.push(Math.abs(w-x));
arr.push(Math.abs(h-y));

console.log(Math.min(...arr));