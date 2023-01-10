class App
{
    runApplication()
    {
        console.log("hello world!");
        

        let canvas = document.getElementById("canvasId")
        console.log(canvas)

        let randomInt = Math.floor(Math.random() * 2);
        console.log(randomInt); 

        let RandomPosX = Math.floor(Math.random() * 800);
        let RandomPosY = Math.floor(Math.random() * 800);
        console.log(RandomPosX)
        console.log(RandomPosY)

        let g = canvas.getContext("2d");
        this.drawHouse(g, randomInt, RandomPosX, RandomPosY);

    }
        //house

    drawHouse(g, randomInt, RandomPosX, RandomPosY){

        //front
        g.beginPath();
        g.strokeStyle = "#5c4238";
        g.fillStyle = "#8a7262";
        g.moveTo(40 + RandomPosX, 60 + RandomPosY);
        g.lineTo(40 + RandomPosX, 100 + RandomPosY);
        g.lineTo(120 + RandomPosX, 135 + RandomPosY);
        g.lineTo(120 + RandomPosX, 80 + RandomPosY);
        g.closePath();
        g.stroke();
        g.fill();

        //side square
        g.beginPath();
        g.strokeStyle = "#5c4238";
        g.fillStyle = "#8a7262"
        g.moveTo(120 + RandomPosX, 135 + RandomPosY);
        g.lineTo(163 + RandomPosX, 111 + RandomPosY);
        g.lineTo(163 + RandomPosX, 70 + RandomPosY);
        g.lineTo(120 + RandomPosX, 90 + RandomPosY)
        g.closePath();
        g.stroke();
        g.fill();

        //door inside at day
        if (randomInt == 0)
        {
        g.beginPath();
        g.fillStyle = "black";
        g.strokeStyle = "black";
        g.moveTo(120 + RandomPosX, 102 + RandomPosY);
        g.lineTo(136 + RandomPosX, 98 + RandomPosY); 
        g.lineTo(136 + RandomPosX, 116 + RandomPosY);
        g.lineTo(120 + RandomPosX, 116 + RandomPosY);
        g.stroke();
        g.fill();
        g.closePath();
        }

        //door inside at night
        if (randomInt == 1)
        {
        g.beginPath();
        g.fillStyle = "#ffb347";
        g.strokeStyle = "#d98002";
        g.moveTo(120 + RandomPosX, 102 + RandomPosY);
        g.lineTo(136 + RandomPosX, 98 + RandomPosY);
        g.lineTo(136 + RandomPosX, 116 + RandomPosY);
        g.lineTo(120 + RandomPosX, 116 + RandomPosY);
        g.stroke();
        g.fill();
        g.closePath();
        }

        //door
        g.beginPath();
        g.fillStyle = "#a64038";
        g.strokeStyle = "#692924";
        g.moveTo(120 + RandomPosX, 135 + RandomPosY);
        g.lineTo(138 + RandomPosX, 136 + RandomPosY);
        g.lineTo(138 + RandomPosX, 103 + RandomPosY);
        g.lineTo(120 + RandomPosX, 102 + RandomPosY);
        g.closePath();
        g.stroke();
        g.fill();



        //side triangle
        g.beginPath();
        g.strokeStyle = "#5c4238";
        g.fillStyle = "#8a7262";
        g.moveTo(163 + RandomPosX, 70 + RandomPosY);
        g.lineTo(140 + RandomPosX, 40 + RandomPosY);
        g.lineTo(120 + RandomPosX, 90 + RandomPosY)
        g.closePath();
        g.stroke();
        g.fill();

        //roof.
        g.beginPath();
        g.strokeStyle = "#75221b";
        g.fillStyle = "#ad180c";
        g.moveTo(60 + RandomPosX, 20 + RandomPosY);
        g.lineTo(140 + RandomPosX, 40 + RandomPosY);
        g.lineTo(120 + RandomPosX, 90 + RandomPosY);
        g.lineTo(40 + RandomPosX, 60 + RandomPosY);
        g.closePath();
        g.stroke();
        g.fill();

        //window at day

        if (randomInt == 0)
        {
        g.beginPath();
        g.fillStyle = "lightblue";
        g.strokeStyle = "#5c4238";
        g.moveTo(53 + RandomPosX, 70 + RandomPosY);
        g.lineTo(53 + RandomPosX, 90 + RandomPosY);
        g.lineTo(72.6 + RandomPosX, 98 + RandomPosY);
        g.lineTo(73 + RandomPosX, 77 + RandomPosY);
        g.lineTo(53 + RandomPosX, 70 + RandomPosY);
        g.closePath();
        g.fill();
        g.stroke();
        }

        //window at night
        if (randomInt == 1)
        {
        //main window
        g.beginPath();
        g.fillStyle = "#ffb347";
        g.strokeStyle = "#5c4238";
        g.moveTo(53 + RandomPosX, 70 + RandomPosY);
        g.lineTo(53 + RandomPosX, 90 + RandomPosY);
        g.lineTo(72.6 + RandomPosX, 98 + RandomPosY);
        g.lineTo(73 + RandomPosX, 77 + RandomPosY);
        g.lineTo(53 + RandomPosX, 70 + RandomPosY);
        g.closePath();
        g.fill();
        g.stroke();
        }
    }

    drawTree(){
        
    }
}



let app = new App();

function runMultipleTimes(number){
    for (let i = 0; i < number; i++){
        app.runApplication(i);
    }
}

runMultipleTimes(8);