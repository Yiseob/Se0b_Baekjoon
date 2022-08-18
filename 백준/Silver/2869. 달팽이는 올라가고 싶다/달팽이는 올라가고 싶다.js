const fs = require('fs');
const [A, B, V] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

        let day = Math.ceil((V - B) / (A - B));

        console.log(day);

