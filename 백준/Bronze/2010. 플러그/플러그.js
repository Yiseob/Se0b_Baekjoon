let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let res = 0;

for (let i = 1; i<input.length; i++){
    res += Number(input[i]);
}

console.log(res - input[0] + 1);
