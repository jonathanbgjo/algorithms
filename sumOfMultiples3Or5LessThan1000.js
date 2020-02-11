function sumOfMultiples3Or5LessThan1000(){
    let sum = 0;
    for(let iterator = 0 ; iterator < 1000 ; iterator++){
        if((iterator % 3 == 0) || (iterator % 5 == 0)){ 
            sum += iterator;
        }
    }
    console.log(sum);
}

sumOfMultiples3Or5LessThan1000();


// check if its divisible by 5 or 3 and just add to sum if it is divisible. (accounts for numbers divisble by both 3 and 5)