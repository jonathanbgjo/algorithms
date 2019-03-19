function Node(val){
    this.val = val;
    this.left = null;
    this.right = null;
}

function myBst(){
    this.root = null;
    
}
function addNode(bst, val){
        let newNode = new Node(val);
        //if root is null, make new node the root
        if(bst.root == null){
            bst.root = newNode;
        }
        else{
            //set a runner
            let runner = bst.root;
            //if val is less than root, start running left
            if(val > bst.root.val){
                while(runner.left){
                    if(val > runner.left.val){
                        runner = runner.left;
                    }
                }
                runner.left = newNode;
            }
        }
        
}

newBst = new myBst();
addNode(newBst, 5);
addNode(newBst, 3);
addNode(newBst, 1);
//addNode(newBst, 5);
console.log(newBst);
console.log(newBst.root.val);