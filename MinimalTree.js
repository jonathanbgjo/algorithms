function BST(){
	this.root = null;
	this.Minimal = function(arr){
		this.root = createMinimal(arr, 0, arr.length-1);
		return true;
	}
}
function Node(val){
	this.val = val;
	this.left = null;
	this.right = null;
}

function createMinimal(arr, start, end){
	if(start > end){
		return null;
	}
	var mid = Math.ceil((start+end)/2);
	console.log("mid",mid)
	console.log(arr[mid])
	var node = new Node(arr[mid]);
	node.left = createMinimal(arr, start, mid-1)
	node.right = createMinimal(arr, mid+1, end)
	return node
}

var tree = new BST()
var array = [0,1,2,3,4,5,6,7,8,9,10];
tree.Minimal(array);
console.log(tree.root);
console.log(tree.root.left)