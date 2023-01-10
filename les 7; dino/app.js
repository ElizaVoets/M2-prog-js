class Dino{
    constructor(type, height, hostile, nutrition, alive){
        this.type = type;
        this.height = height;
        this.hostile = hostile;
        this.nutrition = nutrition;
        this.alive = alive;
    }
}

class App{
    runApp(){
        let dino1 = new Dino("Tyrannosaurus rex", 13, true, "carnivore", true)
        let dino2 = new Dino()
        let dino3 = new Dino()
        let dino4 = new Dino()
        let dino5 = new Dino()
    }
}