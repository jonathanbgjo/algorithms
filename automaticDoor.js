Class AutomaticDoorOpener{
    Button button;
    Motor openMotor;
    Motor closeMotor;
    Door door;
    //initialize door to open if not CLOSE or OPEN;
    if(door.status != closed || door.status != open){
        //Don't know how to implement real time checker to see if door is fully opened. 
        //in the beginning. might not take the full timer to open  
        //i.e door is halfway opened, would take half the time and you would want it to be responsive immediately
        while(openMotor.timer != 0 || door.status == open){
            door.status = moving;
            openMotor.command = 1;
        }
        door.status = open;
        openMotor.command = 0;
    }

    if(button == pressed){
        if(door.status == moving){
            //just ignore if button pressed and door moving.
        }
        else{
            if(door.status == open){
                //haven't really done a project where "status" would change after a certain timer/countdown. 
                //would probably use the computers internal timer
                //but door status would be moving while door closing, and then change to "CLOSED" when fully closed or after countdown
                while(closeMotor.timer != 0){
                    door.status = moving;
                    closeMotorCommand = 1
                }
                door.status = closed;
                closeMotorCommand = 0;
            }
            else{

                //while door opening, door status = moving, motor opening
                while(openMotor.timer != 0){
                    door.status = moving
                    openMotor.command = 1;
                }
                //door status is now OPEN, motor idle
                door.status = open;
                openMotor.command = 0;
            }
        }
    }

}
