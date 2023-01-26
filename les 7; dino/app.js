class Dino{
    constructor(
        type, 
        height, 
        hostile, 
        nutrition, 
        alive){
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
        let dino2 = new Dino("Stegosaurus", 9, false, "herbivore", true)
        let dino3 = new Dino("Triceratops", 9, true, "herbivore", true)
        let dino4 = new Dino("Archaeopteryx", 0.51, true, "omnivore", true)
        let dino5 = new Dino("Brachiosaurus", 25, false, "herbivore", true)
    }
}