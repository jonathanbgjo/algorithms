function RemoveBlanks(str){
	var array = str.split("");
	console.log(array)
	var new_string = "";
	for (var i = 0; i < array.length; i++){
		console.log(array[i])
		if (array[i] != " "){
			new_string += array[i];
		}
	}
	return new_string
}

var string = "  play that Funky Music ";
console.log(RemoveBlanks(string));