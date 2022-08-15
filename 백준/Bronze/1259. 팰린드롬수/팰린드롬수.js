let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');


let num = input.pop();



        for (k of input) {
            for (let i = 0; i <= parseInt(k.length / 2); i++) {
                if (i == Math.floor(k.length / 2)) {
                    console.log("yes");
                    break;
                } else {
                    if (k[i] !== k[k.length - i - 1]) {
                        console.log("no");
                        break;
                    }
                }
            }
        }