let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n'); 

let c1 = input[0];
let c2 = input[1];
let c3 = input[2];


         let color = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];

        let num = color.indexOf(c3);

        let res = (String(color.indexOf(c1)) + String(color.indexOf(c2))).padEnd(2 + num, '0');

        if (c1 == 'black' && c2 !== 'black') {
            console.log(String(color.indexOf(c2)).padEnd(1 + num, '0'));
        } else if (c1 == 'black' && c2 == 'black') {
            console.log('0');
        } else {
            console.log(res);
        }
