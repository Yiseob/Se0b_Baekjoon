 

const fs = require('fs');
const [n, ...input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

    let solve = function (array) {
        let answer = [];
        for (let i of array) {
            if (i == '(') {
                answer.push(i);
            } else {
                if (answer[answer.length - 1] == '(') {
                    answer.pop();
                } else {
                    answer.push(i);
                }
            }
        }
        if (answer.length == false) {
            console.log("YES");
        } else {
            console.log("NO");
        }
    }

    for (let i of input) {
        solve(i);
    }
