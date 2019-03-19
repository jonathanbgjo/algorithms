function allSubsets(str, substr, arr){
	if (arr === undefined) {
		arr = [];
	}
	if (substr === undefined){
		substr = "";
	}

	if (str == ""){
		arr.push(substr)
		return arr;
	}

	var first = str[str.length-1];
	str = str.slice(0, str.length-2);
	console.log(str)

	allSubsets(str, substr, arr);
	allSubsets(str, substr + first, arr)

	return arr
}

var string = "ABC"
console.log(allSubsets(string))