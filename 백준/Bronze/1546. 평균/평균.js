let fs = require('fs');
let [num, input] = fs.readFileSync('/dev/stdin').toString().split('\n');
  


        let score = input.split(" ");
        let res = 0;
        score.sort(function (a, b) {
            return b - a;
        });
        let max = score[0];

        for (let i = 0; i < score.length; i++) {
            score[i] = score[i] / max * 100;
        }

        for (n of score) {
            res += n;
        }
        console.log(res / num);