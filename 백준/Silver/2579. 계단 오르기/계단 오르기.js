const fs = require('fs');
const [N, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map((x)=>Number(x));
 
function solve(n) {
        let answer = 0;
        let dy = Array.from({length: n + 1}, () => 0);
        dy[0] = arr[0];
        dy[1] = arr[0] + arr[1];
        dy[2] = Math.max(arr[2] + arr[0], arr[2] + arr[1])

        for (let i = 3; i <= n; i++) {
            dy[i] = Math.max(arr[i] + arr[i - 1] + dy[i - 3], arr[i] + dy[i - 2]);
        }
        answer = dy[n];
        return answer;
    }

    console.log(solve(N - 1));
