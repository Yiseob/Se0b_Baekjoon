const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(/\n/);

let NM = input[0];
const N = NM.split(" ")[0] / 1;
        const M = NM.split(" ")[1] / 1;
        let card = input[1].split(" ").map((v) => v / 1);

        card.sort((a, b) => {
            return a - b;
        });

        let solve = [];

        for (let i = 0; i < N ; i++) {
            for (let j = i + 1; j < N ; j++) {
                for (let k = j + 1; k < N; k++) {
                    if (card[i] + card[j] + card[k] <= M) {
                        solve.push(card[i] + card[j] + card[k]);
                    }
                }
            }
        }

       
solve.sort((a, b) => {
            return b - a;
        });

        console.log(solve[0]);
