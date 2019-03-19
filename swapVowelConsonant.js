function swap(str){
    let vowelStr = "";
    let consonantStr = "";

    for(let i = 0; i < str.length; i++){
        if((str[i] == 'a') || (str[i] == 'e') || (str[i] == 'i') || (str[i] == 'o') || (str[i] == 'u') || (str[i] == 'y')){
            vowelStr += str[i];
        }
        else{
            consonantStr += str[i];
        }
    }

    console.log(vowelStr + "v");
    console.log(consonantStr + "c");
}

swap("whatsup");
swap("azzadsfasdfaaaasdfadfssadfasdf");
swap("qwrtplkjhfma");