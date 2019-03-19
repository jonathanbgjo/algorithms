function InsertionSort(arr){
	var count = 0;
	Sort(arr, count);
	function Sort(arr, count){
		if (count == arr.length){
			return arr
		}
		var min = arr[count];
		var minidx = count;
		for(var i=count; i < arr.length; i++){
			if(min > arr[i]){
				min = arr[i]
				minidx = i;
			}
		}
		if(arr[count] != min){
			var temp = arr[count];
			arr[count] = min;
			arr[minidx] = temp;
		}
		count++
		return Sort(arr, count)
	}
	return arr
}

var list = [9,8,7,6,5,4,3,2,1];
console.log(InsertionSort(list));