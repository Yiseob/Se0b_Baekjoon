const fs = require('fs');
const [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");


let input = arr.map((v) => v/1);

        let solve = function (k, n) {

            if (k == 1) {
                return n;
            } else if (n == 1) {
                return 1;
            } else if (k > 1 && n > 1) {
                return solve(k, n - 1) + solve(k - 1, n);
            }
        }

        for (let i = 0; i < input.length; i += 2) {
            console.log(solve(input[i] + 1, input[i + 1]));
        }

  