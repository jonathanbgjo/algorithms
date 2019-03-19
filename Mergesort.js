function MergeSort(arr){

	if(arr.length < 2){
		return arr
	}

	var mid = Math.floor(arr.length/2);
	console.log(mid)
	var left = arr.slice(0,mid);
	console.log('left',left)
	var right = arr.slice(mid)
	console.log('right',right)

	return Sort(MergeSort(left), MergeSort(right))
}

function Sort(left, right){
	var output = [];
	var i = 0;
	var j = 0;
	while(i < left.length && j < right.length){
		if(left[i] > right[j]){
			output.push(right[j]);
			j++
		}
		else if(left[i] < right[j]){
			output.push(left[i]);
			i++
		}
		else{
			output.push(left[i]);
			output.push(right[j]);
			j++
			i++
		}
	}
	while (i < left.length){
		output.push(left[i]);
		i++
	}
	while(j < right.length){
		output.push(right[j]);
		j++
	}
	return output;
}

var array = [9,8,7,6,5,4,3,2,1];
console.log(MergeSort(array));