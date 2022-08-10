let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

        const N = input[0];
        const F = input[1];
        
        let array = N.split("");

        //array.pop();

        array.splice(array.length - 2, 2, '0', '0');

        let res = Number(array.join(''));

        for (let i = 0; i <= 99; i++) {
            if ((res + i) % F == 0) {
                if (i < 10) {
                    console.log('0' + i);
                    break;
                } else {
                    console.log(i);
                    break;
                }
            }
        }
