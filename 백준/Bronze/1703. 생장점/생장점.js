const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (const str of input){
    if(str === '0') break;
    const spl = str.split(" ");
    let res = 1;
    for (let i = 1; i < spl.length; i++){
        if (i%2 == 1){
            res *= spl[i];
        }else if (i%2 == 0){
            res -= spl[i];
        }
    }
    console.log(res);
   }