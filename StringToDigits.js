function StringToDigits(str){
	var number = 0;
	for (var i=0; i < str.length; i++){
		if(str[i] >= 0){
			number *= 10
			number += parseInt(str[i])
		}
	}
	return number;
}

var string = "0s1a3y5w7h9a2t4?6!8?0"
console.log(StringToDigits(string))