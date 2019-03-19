function twodMaxtrix(a, val){
    let flagger = false;
    for(let i = 0; i< a.length; i++){
        for(let k = 0; k < a[i].length; k++){
            if(a[i][k] == val){
                return "val " + val + " is at row " + (i+1) + " at column " + (k+1);
            }
        }
    }

    return flagger
}


a = [
    [0,1,2,3],
    [4,5,6,7],
    [10,11,15,16],
    [25,27,35,42]
]

console.log(twodMaxtrix(a, 15));
console.log(twodMaxtrix(a, 125));