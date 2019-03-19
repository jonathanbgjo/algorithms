function expansion(str){
	var output = [];
	var count = 0;
	var dic = {};
	
	return expand(str, count, output)
}

// function expand(str, output, start){
// 	var temp = str
// 	console.log(output)
// 	for(var i=start; i<str.length; i++){
// 		if(str[i] == "?"){
// 			temp[i] = 0
// 			expand(temp, output, i);
// 			console.log('0', temp);
// 			console.log('output',output)
// 			str[i] = 1
// 			console.log('temp', temp, 'str', str)
// 			expand(str, output, i)
// 			console.log(output)
// 			output.push(str)
// 		}
// 	}
// 	return output
// }

function expand(str, count, output){
	// if(count == 0){
	// 	output.push(str);
	// 	console.log(output);
	// }
	for(var i=0; i<str.length; i++){
		if(str[i] == '?'){
			var pre = str.substring(0, i)
			var remaining = str.substring(i+1)
			console.log(count)
			expand(pre+1+remaining, --count, output)
			console.log('hi', count);
			expand(pre+0+remaining, --count, output)
		}
	}
	output.push(str)
	console.log(output);
}

var str = "0100?0111";
console.log(expansion(str))