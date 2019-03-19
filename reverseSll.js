function node(){
    this.next = null;
    this.val = null;
}
function Sll(){
    this.head = null;
}
Sll.prototype.add = function(val){
    myNewNode = new node(val);

    if (this.head == null){
        this.head = myNewNode;
    }
    else{
        let runner = this.head;
        while(runner.next){
            runner = runner.next;
        }
        runner.next = myNewNode;
    }
}

Sll.prototype.reverseSll = function(){
    let prev = null;
    let cur= this.head;
    let runner = cur;
    while(cur){
        runner = cur.next;
        cur.next = prev;
        prev = cur;
        cur = runner;

    }
    this.head = prev;
}

mySll = new Sll();
mySll.add(10);
mySll.add(1);
mySll.add(5);
mySll.add(2);
mySll.add(8);


console.log(mySll);
console.log(mySll.reverseSll());