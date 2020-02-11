import * from swapNumbers from '/algorithms' ;

function createMatrix(number){
    //let arr = [number][number];
    var arr = [];
    for(let i=0;i<number+ 1;i++){
        arr[i] = [];
    }
    let count = number;
    //for(let k = number; k>=0;k--){
        for(let i =0;i<number+1;i++){
            for(let k = 0; k<number+1; k++){
                arr[i][k] = k+","+count;
            }
            count--;
        }
    //}

        
    return arr;
}

console.log("5");
let matrix = createMatrix(5);
console.log(matrix);
let c = 25; let d = 30;
//console.log(swapNumbers(c,x));
function directionList(){

}