function StringAna(str){
	var substring = "";
	var output = [];
	return Ana(str, substring, output)
}

function Ana(str, substring, output){
	if(str.length == 0){
		output.push(substring)
		return output
	}

	for(var i=0; i<str.length; i++){
		var first = str.substring(0, i)
		var end = str.substring(i+1)
		Ana(first+end, substring+str[i], output)
	}
	return output
}

var string = "tar"
console.log(StringAna(string))