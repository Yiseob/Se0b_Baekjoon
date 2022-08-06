let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

    const front = Number(input[0]);
    const back = Number(input[1]);

    let fx = front / 4;
    let bx = back / 4;

    
    let fy = front % 4;
        if(fy === 0){
            fy = fy + 4
            fx = fx -1
        };

    let by = back % 4;
        if(by === 0){
            by = by + 4
            bx = bx - 1
        };

    
    let x = Math.abs(Math.floor(fx)-Math.floor(bx));
    let y = Math.abs(Math.floor(fy)-Math.floor(by));

    console.log(x+y);