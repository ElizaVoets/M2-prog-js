class App{

    runApplication(){
        let button = document.getElementById('rerollButton');
        button.addEventListener('click', ()=>{
            let stat1 = this.rollstat();
            let stat2 = this.rollstat();
            let stat3 = this.rollstat();
            let stat4 = this.rollstat();
            let stat5 = this.rollstat();
            let stat6 = this.rollstat();
            
            console.log(stat1,stat2,stat3,stat4,stat5,stat6)

            let headerEL1 = document.getElementById("s1");
            headerEL1.innerText = "strenght: " + stat1;
            let headerEL2 = document.getElementById("s2");
            headerEL2.innerText = "dexterity: " + stat2;
            let headerEL3 = document.getElementById("s3");
            headerEL3.innerText = "constitution: " + stat3;
            let headerEL4 = document.getElementById("s4");
            headerEL4.innerText = "intellegence: " + stat4;
            let headerEL5 = document.getElementById("s5");
            headerEL5.innerText = "wisdom: " + stat5;
            let headerEL6 = document.getElementById("s6");
            headerEL6.innerText = "charisma: " + stat6;
        })

        let stat1 = this.rollstat();
        let stat2 = this.rollstat();
        let stat3 = this.rollstat();
        let stat4 = this.rollstat();
        let stat5 = this.rollstat();
        let stat6 = this.rollstat();
        
        console.log(stat1,stat2,stat3,stat4,stat5,stat6)

        let headerEL1 = document.getElementById("s1");
        headerEL1.innerText = "strenght: " + stat1;
        let headerEL2 = document.getElementById("s2");
        headerEL2.innerText = "dexterity: " + stat2;
        let headerEL3 = document.getElementById("s3");
        headerEL3.innerText = "constitution: " + stat3;
        let headerEL4 = document.getElementById("s4");
        headerEL4.innerText = "intellegence: " + stat4;
        let headerEL5 = document.getElementById("s5");
        headerEL5.innerText = "wisdom: " + stat5;
        let headerEL6 = document.getElementById("s6");
        headerEL6.innerText = "charisma: " + stat6;
    }
    
    rollDice(){
        return Math.floor(Math.random() *6+1); 
    }
    
    rollstat(){
        let d1 = this.rollDice();
        let d2 = this.rollDice();
        let d3 = this.rollDice();
        let d4 = this.rollDice();

        let diceArray = [d1, d2, d3, d4];
        console.log(diceArray);
        diceArray.sort();
        diceArray.reverse();
        console.log(diceArray);

        let som = diceArray[0]+diceArray[1]+diceArray[2];
        console.log(som);
        
        let stats
        if(som < 2){
            stats = "-5"
        }
        else if(som == 2 || som == 3){
            stats = "-4"
        }
        else if(som == 4 || som == 5){
            stats = "-3"
        }
        else if(som == 6 || som == 7){
            stats = "-2"
        }
        else if(som == 8 || som == 9){
            stats = "-1"
        }
        else if(som == 10 || som == 11){
            stats = "0"
        }
        else if(som == 12 || som == 13){
            stats = "1"
        }
        else if(som == 14 || som == 15){
            stats = "2"
        }
        else if(som == 16 || som == 17){
            stats = "3"
        }
        else if(som == 18 || som == 19){
            stats = "4"
        }
        else if(som == 20 || som == 21){
            stats = "5"
        }
        else if(som == 22 || som == 23){
            stats = "6"
        }
        else if(som == 24 || som == 25){
            stats = "7"
        }
        return stats
    }
}

let app = new App ();
app.runApplication();