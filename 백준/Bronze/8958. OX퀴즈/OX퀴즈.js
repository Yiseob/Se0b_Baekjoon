 
const fs = require('fs');
const [n, ...input] = fs.readFileSync("/dev/stdin").toString().trim().split(/\s/);


    let solve = function (array) {
        let sum = 0;
        let score = 0;

        for (let i = 0; i < array.length; i++) {
            if (array[i] === 'O') {
                score += 1;
                sum += score;
            } else {
                score = 0;
            }
        }
        let answer = sum;
        return answer;
    }

    for (let arr of input) {
        console.log(solve(arr));
    }