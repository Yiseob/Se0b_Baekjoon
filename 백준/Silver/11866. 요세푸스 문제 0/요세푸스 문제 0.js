const fs = require('fs');
const [N,K] = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

 let arr = [];
    let ans = [];

    for (let i = 0; i < N; i++) {
        arr[i] = i + 1;
    }


    let solve = function (answer, array, num) {
        if (array.length == 0) {
            return answer;
        } else {
            for (let i = 0; i <= num - 1; i++) {
                if (i < num - 1) {
                    array.push(array.shift());
                } else if (i == num - 1) {
                    answer.push(array.shift());
                }
            }
            return solve(answer, array, num);
        }
    }
    let a = solve(ans, arr, K).join(", ");
    console.log(`<${a}>`);
