let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();

let N = Number(input);

for(let i = 1; i<10; i++){
           console.log(`${N} * ${i} = ${N*i}`);
       }