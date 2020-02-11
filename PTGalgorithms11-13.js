function removeElement(arr, val){
    //is it sorted?
    //how would you like it returned
    for(let i =0; i<arr.length;i++){
        if(arr[i] == val){
            arr.splice(i,1);
            i--;
        }
    }

    return arr;
}
//console.log(removeElement([1,2,3,4,3,3,2], 3));

function removeElement2(arr, val){
    let i = 0; j = arr.length-1;
    while(i<j){
        if(arr[i] == val){
            temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
            j--
        }
        else{
            i++;
        }
        //console.log(arr);
        //console.log(i);
    }
    return i;
}
//console.log(removeElement2([1,2,3,4,3,3,2], 3));
//console.log(removeElement2([1,2,3,4,3,3,2], 2));





function mergeSortedArray(arr1, arr2){
    //feel like its better practice to create a new array in the case where we need to keep track of arr 1 and arr 2
    let arr3 = [];
    let count = 0; m = 0; n = 0;
    while((m+n) < (arr1.length+arr2.length)){
        if(arr1[m] < arr2[n]){
            arr3[count] = arr1[m];
            m++; count++;
        }
        else{
            arr3[count] = arr2[n];
            n++; count++;
        }
    }
    //time complexity of O(m+n), space complexity 
    return arr3;
}
function mergeSortedInPlace(arr1, arr2){
    let m = 0; n = 0;
    while(m+n < arr1.length+arr2.length){
        if(arr1[m] < arr2[n]){

        }
        else{
            arr1.splice(m,0,arr2[n]);
            n++;
    
        }
        m++;
    }
    return arr1;
}
//console.log(mergeSortedArray( [1,2,3], [2,5,6]));
//console.log(mergeSortedInPlace( [1,2,3], [2,5,6]));


//use hashmap that stores number and index
//go through arr and check if target-number exists in hashmap, if not, store arr[i] into hashmap
//[2,7,11,15]
//check if hashmap has target - 2; store [2,0] value and index;
//check if hashmap has target -7; YES, return both index
//etc etc

function twoSum(arr, target){
    for(let i = 0;i<arr.length-1;i++){
        for(let j = i+1;j<arr.length;j++){
            if(arr[i] + arr[j] == target){
                return [i,j];
            }
        }
    }
    return false;
}
//console.log(twoSum([2,7,11,15] , 9));

function validPalindrome(str){
    //first get rid of any non alphanumeric characters
    //then change all characters to lowercase
    //console.log(str);
    str = str.replace(/\W/g, '')
    str = str.toLowerCase();
    //console.log(str);
    let x = str.length-1;
    for(let i =0;i<str.length/2;i++){
        if(str[i] != str[x]){
            return false;
        }
        x--;
    }

    return true;
}
//console.log(validPalindrome("A man, a plan, a canal: Panama"));
//console.log(validPalindrome("race a car"));

function lengthOfLastWord(str){
    let arr = [];
    arr = str.split(" ");
    //console.log(arr);
    return arr[arr.length-1].length;
}
//console.log(lengthOfLastWord("Hello World"));
function lengthOfLastWord2(str){
    count = 0; index =0; newStr = "";
    for(i=str.length-1;i>=0;i--){
        console.log("INSIDE FOR STATEMENT");
        if(str[i].match(/^[a-z0-9]+$/i)){
           count++
        }
        else{
            if(count > 0){
                index = i+1;
                break;
            }
        }
        console.log(count);
        console.log(i);
    }
    for(let i = 0; i<count;i++){
        newStr+=str[index+i];
    }

    return newStr;
}
//console.log(lengthOfLastWord2("Hello World"));


function characterValidation(str){
    let stack = [];
    let dict = {
        ")": "(",
        "]":"[",
        "}":"{"
    }
    for(let i =0;i<str.length;i++){
        if( (str[i] == "(") ||(str[i] == "[") || (str[i] == "{")){
            stack.push(str[i]);
        }
        else{
            if(dict[str[i]] != stack.pop()){
                return false;
            }
        }
        //console.log(stack);
    }
    if(stack.length != 0){
        return false;
    }
    return true;
}
//console.log(characterValidation("{}[]()"));
//console.log(characterValidation("{{}}}{"));


//can add rotate certain degree. just mod that input by 360 and divide by 90 and run the function that many times
function rotateMatrix(arr){
    let arr2 = [...Array(arr[0].length)].map(x=>Array(arr.length).fill(0))       

    let k=0;
    //nested loop to iterate through 2d matrix to create new matrix. 
    while(k<=arr[0].length-1){
        for(let i=arr.length-1;i>=0;i--){
            arr2[k][arr.length-1-i] = arr[i][k]
            //console.log(arr[i][k]);
        }
        k++;
    }

    return arr2;
}
let arr = [["a","b","c",'d'],
           ["e","f","g",'h'],
           ["i","j","k",'l'],
           ['m','n','o','p'],
           ['m','n','o','p']];
let arr5 = [["a","b","c",'d'],
           ["e","f","g",'h']];

let arr3 = [["a","b","c",'d','e'],
            ["f","g","h",'i','j'],
            ["k","l","m",'n','o'],
            ["p","q","r",'s','t'],         
            ["u","v","w",'r','x']];
let arr4 = [["a","b","c",'d','e',"f","g","h",'i','j'],
            ["a","b","c",'d','e',"f","g","h",'i','j'],
            ["a","b","c",'d','e',"f","g","h",'i','j'],
            ["a","b","c",'d','e',"f","g","h",'i','j'],  
            ["a","b","c",'d','e',"f","g","h",'i','j'],  
            ["a","b","c",'d','e',"f","g","h",'i','j'],  
            ["a","b","c",'d','e',"f","g","h",'i','j'],  
            ["a","b","c",'d','e',"f","g","h",'i','j'],  
            ["a","b","c",'d','e',"f","g","h",'i','j'],  
            ["a","b","c",'d','e',"f","g","h",'i','j']];
// console.log(rotateMatrix(arr));
// console.log(rotateMatrix(arr3));
// console.log(rotateMatrix(rotateMatrix(arr4)));
console.log(rotateMatrix(arr5));


function findValMatrix(matrix, val, newVal){
    for(let i =0;i<matrix.length;i++){
        for(let k =0;k<matrix.length;k++){
            if(matrix[i][k] == val){
                matrix[i][k] = newVal;
            }
        }
    }

    return matrix;
}
//console.log(findValMatrix(arr3, 'q', 'HEEE'))

function diagonalMatrixChange(matrix, newVal){
    let x = matrix.length-1;
    for(let i =0;i<matrix.length;i++){
        for(let k =0;k<matrix.length;k++){
            if(i == k ){
                matrix[i][k] = newVal;
                matrix[i][x] = newVal;
                x--;
            }
        }
    }
    return matrix;
}
//console.log(diagonalMatrixChange(arr, "WOO"))
//console.log(diagonalMatrixChange(arr3, "WOO"))