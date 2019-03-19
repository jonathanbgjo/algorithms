function rFib(num){
	var rounded = Math.floor(num);
	if(rounded == 1){
		return 1
	}
	if(rounded <= 0){
		return 0
	}
	return rFib(rounded-1) + rFib(rounded-2)
}

var num = 5;
console.log(rFib(-2))