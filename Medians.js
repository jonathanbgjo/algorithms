function twoMedian(arr1, arr2){
	var m1 = Medianidx(arr1)
	var m2 = Medianidx(arr2)
	console.log(m1, m2)
	if(arr1.length == 2 && arr2.length == 2) {
		return Median(arr1, arr2)
	}

	if (m1 == m2){
		return arr1[m1]
	}

	if (m1 > m2){
		arr1 = arr1.slice(0, arr1.length/2+1)
		arr2 = arr2.slice(arr2.length/2, arr2.length)
		console.log('arr1', arr1, 'arr2', arr2)
		return twoMedian(arr1, arr2)
	}
	else {
		arr1 = arr1.slice(arr1.length/2, arr1.length)
		arr2 = arr2.slice(0, arr1.length/2+1)
		console.log('arr1', arr1, 'arr2', arr2)
		return twoMedian(arr1, arr2)
	}

}

function Median(arr1, arr2){
	var median = (Math.max(arr1[0], arr2[0]) + Math.min(arr1[1], arr2[1]))/2
	return median
}

function Medianidx(arr){
	if(arr.length % 2 == 0){
		var median = (arr[Math.floor(arr.length/2)] + arr[Math.floor(arr.length/2+1)])/2
	}
	else {
		var median = arr[Math.floor(arr.length/2)]
	}
	return median
}

var array = [1,2,3]
var array1 = [10,23,44,55]
var asd = [2,3]
console.log(twoMedian(array, array1))
