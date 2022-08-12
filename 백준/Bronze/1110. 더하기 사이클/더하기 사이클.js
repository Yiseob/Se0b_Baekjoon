let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();
        let num = input;
        let sum;
        let i = 1;

        while (true) {
            sum = (parseInt(num / 10) + num % 10);
            num = sum % 10 + parseInt(num % 10) * 10;
            if (input == num) {
                console.log(i);
                break;
            }
            i++;
        }
