function isAnagram(str, str2){
    let dict = {};
    let dict2 = {};
    if(str.length != str2.length){
        return false;
    }
    else{
        for(let i=0;i<str.length;i++){
            if(str[i] in dict){
                dict[str[i]]++;
            }
            else{
                dict[str[i]] = 1;
            }
        }
        for(let i=0;i<str2.length;i++){
            //simple check to see if key in dict2 is not in dict1 (meaning it isnt a anagram) since dict1 was completed first
            if(!(str2[i] in dict1)){
                return false;
            }
            if(str2[i] in dict2){
                dict2[str2[i]]++;
            }
            else{
                dict2[str2[i]] = 1;
            }
        }
    }
    let arr1 = [];
    for(key in dict){
        arr1.push(key);
    }
    for(let i = 0; i < arr1.length; i++){
        if (dict[arr1[0]] != dict2[arr1[0]]){
            return false
        }
    }


    console.log(dict);
    console.log(dict2);
    return true;
}
console.log(isAnagram("cat", "act"));
console.log(isAnagram("cat", "actt"));
console.log(isAnagram("catt", "act"));