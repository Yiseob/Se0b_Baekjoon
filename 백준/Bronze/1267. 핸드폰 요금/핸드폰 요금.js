    let fs = require('fs');
    let input = fs.readFileSync('/dev/stdin').toString().split('\n');
    let N = input[0];
    let call = input[1].split(" ");

   let Y = new Array;
   let M = new Array;

   call.forEach((item)=>{
    Y.push(parseInt(item/30+1)*10)
   })

    call.forEach((item)=>{
    M.push(parseInt(item/60+1)*15)
   })

   const YResult = Y.reduce(function add(sum,cur){return sum + cur;},0);
   const MResult = M.reduce(function add(sum,cur){return sum + cur;},0);

   if (YResult>MResult){
    console.log("M");
    console.log(MResult);
   }else if (MResult>YResult){
    console.log("Y");
    console.log(YResult);
   }else{
    console.log("Y","M", YResult);
   }
