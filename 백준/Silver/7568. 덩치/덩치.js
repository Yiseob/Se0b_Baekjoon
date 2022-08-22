const fs = require('fs');
const [T, ...input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const kgcmTable = input.map(kgcm => kgcm.split(" ").map(num => parseInt(num)));
    let rank = [];
    for (let i = 0; i < T; i++) {
        let count = 0;
        for (let j = 0; j < T; j++) {
            if (i !== j) {
                if (
                    kgcmTable[i][0] < kgcmTable[j][0] &&
                    kgcmTable[i][1] < kgcmTable[j][1]
                ) {
                    count++;
                }
            }
        }
        rank.push(count + 1);
    }
    console.log(rank.join(" "));