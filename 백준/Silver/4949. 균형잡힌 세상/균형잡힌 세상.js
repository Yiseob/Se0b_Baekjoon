const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");



        input.pop();

        let solve = function (array) {
            let foo = [];
            for (let k of array) {
                if (k === "(") {
                    foo.push(k);
                } else if (k === ")") {
                    if (foo.length !== 0 && foo[foo.length - 1] === '(') {
                        foo.pop();
                    } else {
                        foo.push(k);
                    }
                } else if (k === "[") {
                    foo.push(k);
                } else if (k === "]") {
                    if (foo.length !== 0 && foo[foo.length - 1] === '[') {
                        foo.pop();
                    } else {
                        foo.push(k);
                    }
                }
            }
            if (foo.length !== 0) {
                return "no";
            } else if (foo.length === 0) {
                return "yes";
            }
        }

        for (let v of input) {
            console.log(solve(v));
        }