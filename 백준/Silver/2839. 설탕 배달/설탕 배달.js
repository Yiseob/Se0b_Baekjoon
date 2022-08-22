const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim()/1;


let solve = function (num) {
        let k = parseInt(num / 5);
        let i = num % 5;
        let m = 1;
        let answer;

        if (i % 3 == 0) {
            answer = k + i / 3;
        } else {
            while (m <= k) {
                if ((num - 5 * (k - m)) % 3 == 0) {
                    answer = k - m + (num - 5 * (k - m)) / 3;
                    break;
                }
                m++;
            }
            if (m > k) {
                answer = -1;
            }
        }
        return answer;
    }

    console.log(solve(input));