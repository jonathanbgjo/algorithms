var doSearch = function(array, targetValue) {
	var min = 0;
	var max = array.length - 1;
  var guess;
  
  while (min <= max) {
      
      guess =Math.floor((max+min)/2);
      console.log(guess);
      console.log(max);
      if (array[guess] > targetValue) {
          max = guess;
      }
      if (array[guess] < targetValue) {
          min = guess+1;
      }
      if (array[guess] === targetValue) {
        return guess;
      }
      console.log("Max", max)
      console.log("Min", min)
      console.log("Mid", guess);
      
  }
	return -1;
};

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
		41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
var result = doSearch(primes, 2);
console.log("Found prime at index " + result);

//Program.assertEqual(doSearch(primes, 73), 20);