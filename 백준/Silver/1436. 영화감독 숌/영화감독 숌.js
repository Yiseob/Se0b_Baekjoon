let fs = require('fs');
let find = fs.readFileSync('/dev/stdin').toString();
        let input = parseInt(find);
        let num = 665;
        let count = 0;
        let i = 0;
        let doom = '666';

        while (count <= input) {

            if (count === input) {
                console.log(num + i - 1);
                break;
            } else {
                if (String(num + i).indexOf(doom) !== -1) {
                    count++;
                    i++;
                } else {
                    i++;
                }
            }
        }
