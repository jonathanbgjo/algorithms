/*Write a short program that prints each number from 1 to 100 on a new line. 

For each multiple of 3, print "Fizz" instead of the number. 

For each multiple of 5, print "Buzz" instead of the number. 

For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.*/ 

function fizzBuzz(){
    for(let i = 1; i < 16; i++){
        console.log(i);
        if(i%15 == 0){
            console.log("FizzBuzz");
            break;
        }
        if(i%5 == 0){
            console.log("Buzz");
        }
        if(i%3 == 0){
            console.log("Fizz");
        }
    }
}

function fizzBuzz2IF(){
    for(let i =1; i<16; i++){
        console.log(i);
        let str = "";
        if(i%3==0){
            str += "Fizz";
        }
        if(i%5==0){
            str+="Buzz";
        }
        console.log(str);
    }
}

//fizzBuzz();
fizzBuzz2IF();


