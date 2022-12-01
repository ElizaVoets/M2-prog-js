class App
{
    runApplication()
    {
        console.log("hello world!");
        let canvas = document.getElementById("canvasId")

        console.log(canvas)

        let g = canvas.getContext("2d");
        //square!
        g.fillRect(0,0,10,10);

        //triangle
        //g.beginPath();
        //g.fillstyle = "yellow";
        //g.moveTo(20,20);
        //g.lineTo(300, 300);
        //g.lineTo(580, 20);
        //g.closePath();
        //g.stroke();
        //g.fill();


        
        //house

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

        //door inside
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

        //window
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
}

let app = new App();
app.runApplication();

