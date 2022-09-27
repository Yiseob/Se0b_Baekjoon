const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
    let n = parseInt(input[0]);
    let arr = input[1].split(" ").map(Number).sort((a, b) => a - b);
    let x = parseInt(input[2]);

    let l = 0;
    let r = n - 1;
    let answer = 0;

    while (l !== r) {
        if (arr[l] + arr[r] == x) {
            answer++;
            r--;
        } else if (arr[l] + arr[r] < x) {
            l++;
        } else if (arr[l] + arr[r] > x) {
            r--;
        }
    }

    console.log(answer);