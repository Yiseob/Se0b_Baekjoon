const fs = require('fs');
const [input, input2] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, m] = input.split(" ").map(Number);
    const array = input2.split(" ").map(Number);
    let sum = 0;

    for (let i = 0; i < m; i++) {
        sum += array[i]
    }
    let max = sum;
    for (let j = m; j < n; j++) {
        sum += (array[j] - array[j - m])
        if (sum > max) {
            max = sum;
        }
    }
    console.log(max);