function Stack()
{
	this.contents = [];
}
Stack.prototype.add = function(val)
{
	this.contents.push(val);
}
Stack.prototype.remove = function()
{
	return this.contents.pop();
}

test = new Stack();
test.add(5);
test.add(15);
test.add(50);
test.add(25);
test.add(55);
test.add(57);
test.add(59);
console.log(test)
x = test.remove()
console.log(test)