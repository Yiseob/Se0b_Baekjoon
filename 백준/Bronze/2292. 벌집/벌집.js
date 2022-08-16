 let fs = require('fs');
let N = fs.readFileSync('/dev/stdin').toString()/1;
        let count = 1;
        let i = 0;

  while (count + (6 * i) < N) {
            count += 6 * i;
            i++;
        }
        console.log(i + 1);