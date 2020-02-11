//get user inputs (First 3 lines) and store into respective variables
//npm install readlineSync
//wasn't sure how to make it continuous so at the moment it is just a one time run.
var readlineSync = require('readline-sync');
var dimension = readlineSync.question('Please enter top-right coordinate(i.e 5x5):');
var userInput = readlineSync.question('Please enter rover coordinate and direction (XCoordinate YCoordinate Direction format i.e 1 2 N):');
var userInstructions = readlineSync.question('Please enter rover instructions (Left Move or Right i.e LMLMRMM:');

/* while(true){
    readlineSync.prompt()
} */

//move rover
function marsRoverMain(){
    //get first line input to get 2dmatrix dimension. 
    //test if dimensions are numbers.
    try{
        if (!Number(dimension[0]) || (!Number(dimension[2]))){
            throw new Error("Please enter a number as the dimension");
        }
    }
    catch(err){
        console.log(err);
    }
    
    let gridWidth = Math.floor(dimension[0]);
    let gridHeight= Math.floor(dimension[2]);
    grid = createGrid(gridWidth, gridHeight);

    //trim spaces in user input. user inputs should be: userinput [0] = x coordinate, userinput[1] = y coordinate, userinput[2] = directioj
    //javascript lenient enough for above method. otherwise, would need to trim and maybe put into char array
    userInput = userInput.replace(/\s/g, '');

    //initalize and store grid coordinates
    try{
        if(userInput.length > 3){
            throw new Error("Too many inputs. Please enter coordinates and direction only.")
        }
        if (!Number(userInput[0]) || (!Number(userInput[1]))){
            throw new Error("Rover coordinates are not in grid");
        }
    }
    catch(err){
        console.log(err);
    }

    //set coordinates = to user input (match same format as coordinates stored in grid)
    let coordinates = Math.floor(userInput[0])+","+ Math.floor(userInput[1]);
    let xCoordinate; let yCoordinate;
    
    // and search through grid to find position in 2d matrix
    for(let i = 0;i <=gridHeight; i++){
        for(let k=0;k<=gridWidth;k++){
            if(grid[i][k] == coordinates){
                xCoordinate = i;
                yCoordinate = k;
            }
        }
    }
    //check to see if user input rover position is within grid.
    try{
        if (xCoordinate == undefined || yCoordinate == undefined){
            throw new Error("Rover coordinates are not in grid");
        }
    }
    catch(err){
        console.log(err);
    }
    
    //set direction variable = to doubly linked list with input direction ( used doubly linked list so it was easy to change direction)
    let roverDirection = directionList(userInput[2]);
    try{
        if(roverDirection == -1){
            throw new Error("User Input for rover direction is invalid. Please enter a correct direction (N, W, E, S)");
        }
    }
    catch(err){
        console.log(err);
    }

    //create new rover with input variables
    let rover = new createRover(xCoordinate,yCoordinate,roverDirection);

    //send grid, rover and instructions to moveRover;
    moveRover(grid, rover, userInstructions);    
    //output new location and direction
    try{
        console.log(grid[rover.xCoordinate][rover.yCoordinate] + rover.direction.value);
    }
    catch(err){

    }
    

}

//create 2d matrix for grid
function createGrid(width, height){
    var arr = [];
    for(let i=0;i<=height;i++){
        arr[i] = [];
    }
    
    //fill 2d matrix with correct x,y grid coordinates, where 0,0 was bottom left and input was top right
    let count = height;
    for(let i =0;i<=height;i++){
        for(let k = 0; k<=width; k++){
            arr[i][k] = k+","+count;
        }
        count--;
    }
    return arr;
}

// hard coded doubly linked list of directions. seems inefficient but i liked the idea of a doubly linked list
function directionList(inputDirection){
    function Node(direction) {
        this.prev = null;
        this.next = null;
        this.value = direction;
    }

    let north = new Node('North')
    let south = new Node('South');
    let west = new Node('West');
    let east = new Node('East');

    north.next = east;
    north.prev = west;
    east.next = south;
    east.prev = north;
    south.next = west;
    south.prev = east;
    west.next = north;
    west.prev = south;

    //console.log(north.next.direction + east.next.direction + south + west);
    //check if input direction is viable, otherwise console error or return -1;
    if(inputDirection == 'n' || inputDirection == 'N'){
        return north;
    }
    else if(inputDirection == 'e'|| inputDirection == 'E'){
        return east;
    }
    else if(inputDirection == 's'|| inputDirection == 'S'){
        return south;
    }
    else if(inputDirection == 'w'|| inputDirection == 'W'){
        return west;
    }
    else{
        //console.error("Please enter a correct direction (N, W, E, S)");
        return -1;
    }
    
}

//create new rover with x,y coordinate and direction
function createRover(x,y,direction, grid){
    //if coordinates in grid and direction exists; create new rover
    this.xCoordinate = x;
    this.yCoordinate = y;
    this.direction = direction;
}

function moveRover(grid, rover, instructions){
    for(let i =0; i<instructions.length; i++){
        //not sure what to do in invalid inputs? Just decided to check if char was L M or R and do the respective action and ignore any other invalid inputs
        //also if supposed to output errors, i would check to see if anything was not L M and R before this loop. my current check would be inefficient in the case where the last character of the instructions string was invalid
        // not sure if switch cases is more efficient, but I was more comfortable with if elses.
        if((instructions[i] == 'L') || (instructions[i] == 'M')|| (instructions[i] == 'R')){
            if(instructions[i] == 'L'){
                rover.direction = rover.direction.prev;
            }
            else if(instructions[i] =='R'){
                rover.direction = rover.direction.next;
            }
            else if(instructions[i] == 'M'){
                if(rover.direction.value == 'North'){
                    //check to see if position exists in grid: if it doesnt, dont move. if it does, move. Not sure if to report error if trying to move off grid
                    if(grid[rover.xCoordinate-1]){
                        rover.xCoordinate -= 1;
                    }
                }
                else if(rover.direction.value == 'East'){
                    if(grid[rover.yCoordinate+1]){
                        rover.yCoordinate += 1;
                    }
                }
                else if(rover.direction.value == 'South'){
                    if(grid[rover.xCoordinate+1]){
                        rover.xCoordinate += 1;
                    }
                }
                else if(rover.direction.value == 'West'|| rover.direction.value == 'W'){
                    if(grid[rover.yCoordinate-1]){
                        rover.yCoordinate -= 1;
                    }
                }
            }
        }
        else{
            //console.error("instructions included something other than L and M and R");
            return -1;
        }
        
    }
}
marsRoverMain();
