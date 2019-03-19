function Node(val)
{
	this.value = val;
	this.next = null;
}
function Sll()
{
	this.head = null;
}
Sll.prototype.add = function(val)
{
	myNewNode = new Node(val);
	if (this.head == null)
	{
		this.head = myNewNode;
	}
	else
	{
		var current = this.head;
		while (current.next != null)
		{
			current = current.next
		}
		current.next = myNewNode;
	}
}
mySll = new Sll();
mySll.add(10);
mySll.add(5);
mySll.add(8);
mySll.add(15);
console.log(mySll.head);
console.log(mySll);