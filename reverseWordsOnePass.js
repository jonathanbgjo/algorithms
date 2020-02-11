function reverseWordOnePass(str){
    let str2 = []; runner = 0; cur =0; count = 0;
    while(runner < str.length){
        if(str[runner] == " "){
            console.log("WHITESPACE INDEX" + runner);
            console.log("CUR INDEX" + cur)
            for(let i = cur; i<runner; i++){
                str2[str.length-runner+count] = str[i];
                count++;
            }
            cur = runner+1;
            runner++;
            count = 0;
        }
        else{
            runner++;
        }
    }
    console.log("CUR INDEX" + cur)
    console.log("WHITESPACE INDEX OR EOF INDEX" + runner);
    for(let i = cur; i<runner; i++){
        str2[str.length-runner+count] = str[i];
        count++;
    }
    return str2;
}
let str = "bob likes alice";
console.log(reverseWordOnePass(str)+"");
