class App
{
    runApplication()
    {
        console.log("hello world!");
        

        let canvas = document.getElementById("canvasId")
        console.log(canvas)

        let randomInt = Math.floor(Math.random() * 2);
        console.log(randomInt);

        let g = canvas.getContext("2d");
        this.drawHouse(g, randomInt);

    }
        //house

    drawHouse(g, randomInt){

        //front
        g.beginPath();
        g.strokeStyle = "#5c4238";
        g.fillStyle = "#8a7262";
        g.moveTo(40, 60);
        g.lineTo(40, 100);
        g.lineTo(120, 135);
        g.lineTo(120, 160);
        g.closePath();
        g.stroke();
        g.fill();

        //side square
        g.beginPath();
        g.strokeStyle = "#5c4238";
        g.fillStyle = "#8a7262"
        g.moveTo(120, 135);
        g.lineTo(163, 111);
        g.lineTo(163, 70);
        g.lineTo(120, 90)
        g.closePath();
        g.stroke();
        g.fill();

        //door inside at day
        if (randomInt == 0)
        {
        g.beginPath();
        g.fillStyle = "black";
        g.strokeStyle = "black";
        g.moveTo(120, 51);
        g.lineTo(136, 49);
        g.lineTo(136, 59);
        g.lineTo(136, 59);
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
        g.moveTo(60, 51);
        g.lineTo(68, 49);
        g.lineTo(68, 59);
        g.lineTo(60, 59);
        g.stroke();
        g.fill();
        g.closePath();
        }

        //door
        g.beginPath();
        g.fillStyle = "#a64038";
        g.strokeStyle = "#692924";
        g.moveTo(60, 67.5);
        g.lineTo(69, 68);
        g.lineTo(69, 51.5);
        g.lineTo(60, 51);
        g.closePath();
        g.stroke();
        g.fill();



        //side triangle
        g.beginPath();
        g.strokeStyle = "#5c4238";
        g.fillStyle = "#8a7262";
        g.moveTo(81.5, 35);
        g.lineTo(70, 20);
        g.lineTo(60, 45)
        g.closePath();
        g.stroke();
        g.fill();

        //roof.
        g.beginPath();
        g.strokeStyle = "#75221b";
        g.fillStyle = "#ad180c";
        g.moveTo(30, 10);
        g.lineTo(70, 20);
        g.lineTo(60, 45);
        g.lineTo(20, 30);
        g.closePath();
        g.stroke();
        g.fill();

        //window at day

        if (randomInt == 0)
        {
        g.beginPath();
        g.fillStyle = "lightblue";
        g.strokeStyle = "#5c4238";
        g.moveTo(26.5, 35);
        g.lineTo(26.5, 45);
        g.lineTo(36.3, 49);
        g.lineTo(36.5, 38);
        g.lineTo(26.5, 35);
        g.closePath();
        g.fill();
        g.stroke();
        g.beginPath();
        g.strokeStyle = "#7ba2a6"
        g.moveTo(31, 36.5);
        g.lineTo(31, 46.9);
        g.closePath();
        g.stroke();
        }

        //window at night
        if (randomInt == 1)
        {
        //main window
        g.beginPath();
        g.fillStyle = "#ffb347";
        g.strokeStyle = "#5c4238";
        g.moveTo(26.5, 35);
        g.lineTo(26.5, 45);
        g.lineTo(36.3, 49);
        g.lineTo(36.5, 38.5);
        g.lineTo(26.5, 35);
        g.closePath();
        g.fill();
        g.stroke();
        g.beginPath();
        g.strokeStyle = "#d98002"
        g.moveTo(31, 36.5);
        g.lineTo(31, 46.9);
        g.closePath();
        g.stroke();

        //light
        g.beginPath();
        g.fillStyle = "rgba(255, 179, 71, 0.5)"
        g.strokeStyle = "rgba(255, 179, 71, 0.5)"
        g.moveTo(26.5, 45);
        g.lineTo(23.5, 53)
        g.lineTo(5, 61.5);
        g.lineTo(25, 71);
        g.lineTo(36, 58.5)
        g.lineTo(36.2, 48.9);

        g.closePath();
        g.stroke();
        g.fill();

        }
    }
}

let app = new App();
app.runApplication();

