function BST(){
	this.root = null;
	this.add = function(n){
		var newNode = new Node(n)
		if(this.root == null){
			this.root = newNode
		}
		else {
			if(n >= this.root.val){
				if(this.root.right == null){
					this.root.right = newNode
				}
				else{
					var next = this.root.right
					TreeAdd(next, n)
				}
			}
		}
		return this.root
	}

	var TreeAdd = function (next, n){
		var newNode = new Node(n)
		if(n >= next.val){
			if(next.right == null){
				next.right = newNode
			}
			else{
				console.log('hi')
				next = next.right
				TreeAdd(next, n)
			}
		}
		else{

		}
		return newNode
	}
}

function Node(val){
	this.val = val
	this.left = null;
	this.right = null;
}

var BST = new BST();
console.log(BST.add(5))
console.log(BST.add(6))
console.log(BST.add(7))

var dic = {};
dic.name = "hi";
dic.age = 23;
var count = 0;
for( d in dic){
	count++
}
console.log(count)
