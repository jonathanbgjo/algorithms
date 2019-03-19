function longest(str){
	var longest = {};
	longest.count = 0;
	longest.startidx = 0;
	longest.endidx = 0;
	var found = false;
	for(var i=1; i<str.length; i++){
		for(var j=1; j<str.length; j++){
			if(str[i-j] != str[i+j]){
				found = false;
				break
			}
			else if(str[i-j] == str[i+j]){
				found = true
				if(j*2 > longest.count){
						longest.count = j*2;
						longest.startidx = i-j
						longest.endidx = i+j
				}
			}
		}
		console.log(longest.count);
		console.log('start',longest.startidx)
		console.log('end',longest.endidx);
	}
	var longestPalindrome = "";
	for(var a = longest.startidx; a <= longest.endidx; a++){
		longestPalindrome += str[a];
	}
	return longestPalindrome;
}

var string = "what abba up, dadatacocat?";
console.log(longest(string));