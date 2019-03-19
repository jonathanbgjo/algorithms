function kElement(arr, m){
	var max = arr[0];
	var k = arr[0];
	var count = 1;
	
	for(var i=0; i<arr.length; i++){
		if(max < arr[i]){
			max = arr[i]
		}
	}

	if(max == arr[0]){
		k = arr[1]
	}

	while(count < m){
		for(var j=0; j<arr.length; j++){
			if(arr[j] < max && k < arr[j]){
				k = arr[j]
			}
		}
		console.log(k)
		max = k
		count++;
		if(count == m){
			break;
		}
		k = k - 1;
		
	}

	return k
}

var arr = [10, 3,2,1,5,6,4];
var num = 3

console.log(kElement(arr, num))

//Min Heap
//i - parent = i/2, chidren = i*2, i*2+1

function minHeap(arr){
	for(var i=Math.floor(arr.length/2); i >= 0; i--){
		minHeapafiy(arr, i)
	}
	return arr
}

function minHeapafiy(arr, i){

	var right = i*2+2
	var left = i*2+1
	var smallest = i;
	
	if(left <= arr.length && arr[left] < arr[i]){
		smallest = left
	}
	if(right <= arr.length && arr[right] < arr[left] && arr[right] < arr[i]){
		smallest = right
	}
	if(arr[smallest] != arr[i]){
		var temp = arr[i];
		arr[i] = arr[smallest]
		arr[smallest] = temp
		minHeapafiy(arr, smallest)
	}
	return arr
}

var array = [5,3,2,1,10,7,8]
console.log(minHeap(array))

function kthElement(arr, k){
	var new_array = [];
	for(var i=0; i<k; i++){
		new_array.push(arr[i])
	}
	minHeap = minHeap(new_array)
	console.log(minHeap)
	for(var i=k; i < arr.length; i++){
		if(arr[i] > minHeap[0]){
			minHeap[0] = arr[i]
			minHeapafiy(minHeap, 0)
			console.log(minHeap)
		}
	}
	console.log(minHeap)
	return minHeap[0]
}

var arr = [4,8,10,3,2,5,14]
console.log('kth', kthElement(arr, 5))