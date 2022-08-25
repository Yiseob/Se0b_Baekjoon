const fs = require('fs');
const [N, ...input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
  
const name = input.map(x => x.split(" "));

    name.sort((a, b) => a[0] - b[0]);

    for (let i of name) {
        console.log(i.join(" "));
    }
