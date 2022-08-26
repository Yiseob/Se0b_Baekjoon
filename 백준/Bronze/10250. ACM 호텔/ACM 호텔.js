const fs = require('fs');
const [T, ...input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
 let solve = function (array) {
            let [H, W, N] = array;
            let floor = N % H;
            let room = String(Math.floor(N / H) + 1).padStart(2, '0');

            if (floor == 0) {
                floor = H;
                room = String(Math.floor(N / H)).padStart(2, '0');
            }

            console.log(`${floor}${room}`);
        }

        for (let i of input) {
            solve(i.split(" "));
        }