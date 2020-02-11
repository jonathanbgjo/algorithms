let max = 0;
function findMax(arr, count, x,y){
    if((x>=arr.length) || (y>=arr[0].length)){
        return null;
    }
    if(arr[x][y] == 'E'){
        return count;
    }
    count+= arr[x][y];

    return Math.max(findMax(arr, count, x+1, y),findMax(arr, count, x, y+1));
}

let arr =   [[0,0,2,8],
            [0,0,0,0],
            [10,3,0,12],
            [0,0,13,'E']];


let arr2 =  [[0,0,2,8],
            [0,0,0,'E']];


let arr3 =  [[0,0,2,8],
            [0,0,0,0],
            [10,3,0,12],
            [0,0,1,5],
            [0,0,1,1],
            [-25,0,1,2],
            [10,10,13,'E']];

let arr4 =  [[0,2,0,'E']];

let arr5 = [[-50,-20,-2,-8],
            [-10,-20,-30,-40],
            [-10,-3,-100,-12],
            [-.50,-50,-13,'E']];

let arr6 =   [[0,0,0,0],
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,'E']];

console.log(max = findMax(arr, 0, 0, 0));
console.log(max = findMax(arr2, 0, 0, 0));
console.log(max = findMax(arr3, 0, 0, 0));
console.log(max = findMax(arr4, 0, 0, 0));
console.log(max = findMax(arr5, 0, 0, 0));
console.log(max = findMax(arr6, 0, 0, 0));