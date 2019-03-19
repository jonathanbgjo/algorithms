function rotateArray (arr, n) {
	var rotate = n % arr.length;
	var count = 0;
	var startidx = 0;
	var temp1 = arr[0];
	var temp2;
	var spaces;

	while (count <= arr.length) {
		spaces = startidx + rotate;
		
		if(spaces < arr.length) {
			temp2 = arr[spaces];
			arr[spaces] = temp1;
			startidx = spaces;
			temp1 = temp2;
			count++;
		}
		else {
			temp2 = arr[spaces - arr.length];
			arr[spaces - arr.length] = temp1;
			startidx = spaces - arr.length;
			temp1 = temp2;
			count++;
		}
	}
	return arr;
}

array = [1,2,3,4,5,6,7]

console.log(rotateArray(array, 3));