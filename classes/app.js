class Robot{
    constructor(
        name,
        version,
        battery_persentage,
        color,
        job,
        isdefective,
        selfaware,
        status,
        can_fly,
        locations,
        hostile,
    ){
        this.name = name;
        this.version = version;
        this.color = color;
        this.battery_persentage = battery_persentage;
        this.job = job;
        this.isdefective = isdefective;
        this.selfaware = selfaware;
        this.status = status;
        this.can_fly = can_fly;
        this.locations = locations;
        this.currentlocation = locations[0];
        this.hostile = hostile;


    }

    getinfo(robotinfo){
        robotinfo = [this.name, this.version, this.color];
        console.log("Name: " + robotinfo[0]);
        console.log("Version: " + robotinfo[1]);
        console.log("Color: " + robotinfo[2]);
    }
    moveto(index){
        this.currentlocation = this.locations[index];
    }
    movedfrom(previous_location, current_location){

    }
    current_location(index, robotinfo, currentlocation){
        robotinfo = [this.name, this.version, this.color];
        this.currentlocation = this.locations[index]
        currentlocation = this.currentlocation
        console.log(robotinfo[0], " is in the ", currentlocation, ".")
    }

    checkifdefective(isdefective, robotinfo){
        robotinfo = [this.name, this.version, this.color];
        isdefective = this.isdefective;
        if(isdefective == false){
            console.log(robotinfo[0], " is not defective.")    
        }
        else if(isdefective == true){
            console.log(robotinfo[0], " is defective.")
        }
    }

    checkbattery(){

    }
}

let locations = ["entrance", "kitchen", "cafetaria", "charging room", "medical room", "storage room", "creation room"]
const robot_one = new Robot("mimi", "1_a.y9", 80, "pink", "cook", false, false, "working", false, locations[0] , false);
const robot_two = new Robot("Silo", "2_h.s7", 0, "light yellow", "medic", false, true, "charging", true, locations[3], false);
const robot_three = new Robot("???", "???", 100, "white", "none", false, true, "murderous", false, locations[5]);

robot_one.getinfo();

robot_two.checkifdefective();

robot_one.current_location();