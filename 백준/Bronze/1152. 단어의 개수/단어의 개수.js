let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(" ");
           
let res = input.filter(word => word !== '');
console.log(res.length);
