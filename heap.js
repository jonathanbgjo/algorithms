class Heap{
	
	constructor(){
		this.data = ["heap"];
	}

	add(val){
		this.data.push(val);
		let child = this.data.length - 1; 
		let parent = Math.floor(child/2);

		while(this.data[parent] > this.data[child] && child > 1)
		{
			let temp = this.data[child];
			this.data[child] = this.data[parent];
			this.data[parent] = temp;
			child = parent;
			parent = Math.floor(child/2);
		}
	}
	return this;
}