function wordToNumber(str){
    //just make a count you idiot. so then you know for sure how many digits. 90% DONE BYE BYE
    // i.e twelve million means 12,000,000 to start. anything else you can just add to this count
    //i.e twelve million two hundred twenty seven thousand fifteen = 12,000,000 + 227,000 + 15 = 12,227,015; 


    //keep track of million, thousands for now. dont think i need to keep track of hundreds
    let placement = [0,0]; let placements=["million","thousand"]; let start =0; let end = 0; let result = ""; let flag = false;
    let arr = str.split(" ");
    //use counter to see if ou need to add extra zeros in case of twelve thousand == 12000 instead of 12
    for(let i = 0;i<arr.length;i++){
        if(arr[i] == 'million'){
            placement[0]++;
        }
        if(arr[i] == 'thousand'){
            placement[1]++;
        }
    }
    //console.log(arr);
    let i =0;
    while(i<2){
    for(let k=0;k<arr.length;k++){
        //console.log("hi" + arr[k] + placements[i])
        if(placements[0]>0 && placements[1] == 0){
            results+="000";
        }
        
        if(arr[k] == placements[i]){
            end = k-1;
            var length = end-start+1;
            //console.log(length);
            //length = start-end;
            if(length == 1){
                if(flag == false){
                    if(dict3[arr[start]]){
                        result+= dict3[arr[start]];
                    }
                    else{
                        result+= dict[arr[start]];
                    }
                }
                else{
                    if(dict3[arr[end]]){
                        result += '0' + dict3[arr[end]];
                    }
                    else{
                        result += '00'+ dict[arr[end]];
                    }  
                }
            }
            if(length == 2){
                if(arr[k-1] == "hundred"){
                    result += dict[arr[start]] +"00 ";
                }
                else if(flag == false){
                    result+= dict2[arr[start]] + dict[arr[end]];
                }
                else{
                    result += "0" + dict2[arr[start]] + dict[arr[end]];
                }
            }
            if(length>2){
                if(arr[start+1] == 'hundred'){
                    result+= dict[arr[start]];
                    if(length - (start+1) > 2){
                        result += dict2[arr[start+2]] + dict[arr[end]];
                    }
                    else{
                        if(dict3[arr[end]]){
                            result += dict3[arr[end]];
                        }
                        else{
                            result += dict2[arr[start+2]] + dict[arr[end]];
                        }   
                    }         
                }
            }
            start = k+1;flag = true;
        }            
    }
    i++;
}
    if (end <= start){
        end = arr.length-1;
        length = end - start+1;
            if(length == 1){
            if(flag == false){
                if(dict3[arr[start]]){
                    result+= dict3[arr[start]];
                }
                else{
                    result+= dict[arr[start]];
                }
            }
            else{
                if(dict3[arr[end]]){
                    result += '0' + dict3[arr[end]];
                }
                else{
                    result += '00'+ dict[arr[end]];
                }              }
        }
        if(length == 2){            
            if(arr[end] == "hundred"){
                result += dict[arr[start]] +"00 ";
            }
            else if(flag == false){
                result+= dict2[arr[start]] + dict[arr[end]];
            }
            else{
                result += "0" + dict2[arr[start]] + dict[arr[end]];
            }

        }
        if(length>2){
            if(arr[start+1] == 'hundred'){
                result+= dict[arr[start]];
                if(length - (start+1) > 2){
                    result += dict2[arr[start+2]] + dict[arr[end]];
                }
                else{
                    if(dict3[arr[end]]){
                        result += dict3[arr[end]];
                    }
                    else{
                        result += dict2[arr[start+2]] + dict[arr[end]];
                    }   
            }
        }
    }
    //console.log("RESULT" + result)
    return result;
    }
}
var dict = {
    "zero":"0",
    "one": "1",
    "two": "2",
    "three": "3",
    "four":"4",
    "five":"5",
    "six":"6",
    "seven":"7",
    "eight":"8",
    "nine":"9",
    
}
var dict2 = {
    "twenty": "2",
    "thirty": "3",
    "fourty": "4",
    "fifty": '5',
    "sixty": "6",
    "seventy":"7",
    "eighty":"8",
    "ninety":"9",
}
var dict3 = {
    
    "ten":"10",
    "eleven":"11",
    "twelve":"12",
    "thirteen":"13",
    "fourteen":"14",
    "fifteen":"15",
    "sixteen":"16",
    "seventeen":"17",
    "eighteen":"18",
    "nineteen":"19",
    "twenty":"20",
    "thirty":"30",
    "fourty":"40",
    "fifty":"50",
    "sixty":"60",
    "seventy":"70",
    "eighty":"80",
    "ninety":"90"
}
console.log(wordToNumber("three million two hundred fifteen thousand twenty two"));
console.log(wordToNumber("twelve thousand twelve"))
console.log(wordToNumber("two hundred fifteen"))
console.log(wordToNumber("twenty one thousand"))
console.log(wordToNumber("twenty one thousand two hundred thirteen"))
console.log(wordToNumber("two thousand one hundred thirty four"))
console.log(wordToNumber("twenty one million one hundred twenty three"))
console.log(wordToNumber("ten thousand one hundred thirty four"))
