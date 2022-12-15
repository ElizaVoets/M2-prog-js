class App
{
    runApplication()
    {
        this.drawhouse()
    }

    drawhouse(x, y)
    {
        console.log("hello world!");
        
        let canvas = document.getElementById("canvasId")
        console.log(canvas)
        
        let randomInt = Math.floor(Math.random() * 2);
        console.log(randomInt);

        let g = canvas.getContext("2d");


        //house

        //background at day
        if (randomInt == 0)
        {
            //sky
            g.beginPath();
            g.strokeStyle = "#d0eef2";
            g.fillStyle = "#d0eef2";
            g.moveTo(0,0);
            g.lineTo(0, 1000);
            g.lineTo(1000, 1000);
            g.lineTo(1000, 0);
            g.closePath();
            g.stroke();
            g.fill();

            //grass
            g.beginPath();
            g.strokeStyle = "#789e75";
            g.fillStyle = "#789e75";
            g.moveTo(0, 175);
            g.lineTo(1000, 175);
            g.lineTo(1000, 1000);
            g.lineTo(0, 1000);
            g.closePath();
            g.stroke();
            g.fill();
        }

        //background at night
        if (randomInt == 1)
        {
            //sky
            g.beginPath();
            g.strokeStyle = "#10213b";
            g.fillStyle = "#10213b";
            g.moveTo(0,0);
            g.lineTo(0, 1000);
            g.lineTo(1000, 1000);
            g.lineTo(1000, 0);
            g.closePath();
            g.stroke();
            g.fill();

            //grass
            g.beginPath();
            g.strokeStyle = "#243623";
            g.fillStyle = "#243623";
            g.moveTo(0, 175);
            g.lineTo(1000, 175);
            g.lineTo(1000, 1000);
            g.lineTo(0, 1000);
            g.closePath();
            g.stroke();
            g.fill();
        }

        //front
        g.beginPath();
        g.strokeStyle = "#5c4238";
        g.fillStyle = "#8a7262";
        g.moveTo(200, 300);
        g.lineTo(200, 500);
        g.lineTo(600, 675);
        g.lineTo(600, 400);
        g.closePath();
        g.stroke();
        g.fill();

        //side square
        g.beginPath();
        g.strokeStyle = "#5c4238";
        g.fillStyle = "#8a7262"
        g.moveTo(600, 675);
        g.lineTo(815, 555);
        g.lineTo(815, 350);
        g.lineTo(600, 450)
        g.closePath();
        g.stroke();
        g.fill();

        //door inside at day
        if (randomInt == 0)
        {
        g.beginPath();
        g.fillStyle = "black";
        g.strokeStyle = "black";
        g.moveTo(600, 510);
        g.lineTo(680, 490);
        g.lineTo(680, 590);
        g.lineTo(600, 590);
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
        g.moveTo(600, 510);
        g.lineTo(680, 490);
        g.lineTo(680, 590);
        g.lineTo(600, 590);
        g.stroke();
        g.fill();
        g.closePath();
        }

        //door
        g.beginPath();
        g.fillStyle = "#a64038";
        g.strokeStyle = "#692924";
        g.moveTo(600, 675);
        g.lineTo(690, 680);
        g.lineTo(690, 515);
        g.lineTo(600, 510);
        g.closePath();
        g.stroke();
        g.fill();



        //side triangle
        g.beginPath();
        g.strokeStyle = "#5c4238";
        g.fillStyle = "#8a7262";
        g.moveTo(815, 350);
        g.lineTo(700, 200);
        g.lineTo(600, 450)
        g.closePath();
        g.stroke();
        g.fill();

        //roof.
        g.beginPath();
        g.strokeStyle = "#75221b";
        g.fillStyle = "#ad180c";
        g.moveTo(300, 100);
        g.lineTo(700, 200);
        g.lineTo(600, 450);
        g.lineTo(200, 300);
        g.closePath();
        g.stroke();
        g.fill();

        //window at day

        if (randomInt == 0)
        {
        g.beginPath();
        g.fillStyle = "lightblue";
        g.strokeStyle = "#5c4238";
        g.moveTo(265, 350);
        g.lineTo(265, 450);
        g.lineTo(363, 490);
        g.lineTo(365, 385);
        g.lineTo(265, 350);
        g.closePath();
        g.fill();
        g.stroke();
        g.beginPath();
        g.strokeStyle = "#7ba2a6"
        g.moveTo(310, 365);
        g.lineTo(310, 469);
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
        g.moveTo(265, 350);
        g.lineTo(265, 450);
        g.lineTo(363, 490);
        g.lineTo(365, 385);
        g.lineTo(265, 350);
        g.closePath();
        g.fill();
        g.stroke();
        g.beginPath();
        g.strokeStyle = "#d98002"
        g.moveTo(310, 365);
        g.lineTo(310, 469);
        g.closePath();
        g.stroke();

        //light
        g.beginPath();
        g.fillStyle = "rgba(255, 179, 71, 0.5)"
        g.strokeStyle = "rgba(255, 179, 71, 0.5)"
        g.moveTo(265, 450);
        g.lineTo(235, 530)
        g.lineTo(50, 615);
        g.lineTo(250, 710);
        g.lineTo(360, 585)
        g.lineTo(362, 489);

        g.closePath();
        g.stroke();
        g.fill();

        }
    }
}

let app = new App();
app.runApplication();

