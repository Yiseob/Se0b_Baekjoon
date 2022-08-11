let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let num = input[0];  
let res = input[1].split(" ");

       res.sort(function(a,b){
           return a - b;
       });

       console.log(res[0] * res[res.length-1]);
