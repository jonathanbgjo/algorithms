function heap(){
	this.root = null;
	this.buildHeap = function(arr){
		this.root = new Node(arr[0]);

	}
}

function Node(val){
	this.val = val
	this.right = null;
	this.left = null;
	this.next = null;
}

function Queue(){
	this.head = null;
	this.tail = null;
	this.add = function (node){
		if(this.head == null){
			this.head = node
			this.tail = node
		}
		else {
			this.tail.next = node;
			this.tail = node;
		}
	}
	this.pop = function(){
		var pop = this.head
		this.head = this.head.next;
		pop.next = null;
		return pop;
	}
}

// for i, parent = i/2, childrens = i*2 and i*2+1
function build_max_heap(arr){
	for(var i = Math.floor(arr.length/2); i >= 0; i--){
		max_heapify(arr, i);
	}
	return arr
}
function max_heapify(arr, n){
	var right = n*2+2
	var left = n*2+1
	var largest = n;
	if(left <= arr.length && arr[left] > arr[n]){
		largest = left;
	}
	if(right <= arr.length && arr[right] > arr[left] && arr[right] > arr[n]){
		largest = right;
	}
	if(arr[largest] != arr[n]){
		var temp = arr[n];
		arr[n] = arr[largest]
		arr[largest] = temp;
		max_heapify(arr, largest)
	}
	return arr
}

var array = [4,1,3,2,16,9,10,14,8,7];
console.log(build_max_heap(array))
var array1 = build_max_heap(array);

console.log(array1);

function HeapSort(arr){
	var output = [];
	while (arr.length > 0){
		var temp = arr[0];
		arr[0] = arr[arr.length-1];
		arr[arr.length-1] = temp
		output.push(arr[arr.length-1])
		arr.length = arr.length-1;
		max_heapify(arr, 0);
	}
	return output
}

console.log('output',HeapSort(array1))