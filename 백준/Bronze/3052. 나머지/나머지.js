const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let solve = function (array) {
        let res = [];
        for (let num of array) {
            res.push(num % 42);
        }
        let set = new Set(res);
        let answer = [...set];
        return answer.length;
    }

    console.log(solve(input));