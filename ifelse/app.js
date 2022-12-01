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

        let title = getElementById("newstitle");
        let randomGetal = Math.random();

        if (title == 0){
            title.style.backgroundColor = "#754a8c"
        }

        else if (title < 0.2){
            title.style.backgroundColor = "#8c4a62"
        }

        else if (title )

        
        //house

        //front
        g.beginPath();
        g.strokeStyle = "gray";
        g.fillStyle = "lightgray";
        g.moveTo(200, 300);
        g.lineTo(200, 500);
        g.lineTo(600, 675);
        g.lineTo(600, 400);
        g.closePath();
        g.stroke();
        g.fill();

        //side square
        g.beginPath();
        g.strokeStyle = "gray";
        g.fillStyle = "lightgray"
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
        g.fillStyle = "white";
        g.strokeStyle = "gray";
        g.moveTo(600, 675);
        g.lineTo(690, 680);
        g.lineTo(690, 515);
        g.lineTo(600, 510);
        g.closePath();
        g.stroke();
        g.fill();



        //side triangle
        g.beginPath();
        g.strokeStyle = "gray";
        g.fillStyle = "lightgray"
        g.moveTo(815, 350);
        g.lineTo(700, 200);
        g.lineTo(600, 450)
        g.closePath();
        g.stroke();
        g.fill();

        //roof.
        g.beginPath();
        g.strokeStyle = "brown";
        g.fillStyle = "red";
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
        g.strokeStyle = "gray";
        g.moveTo(265, 350);
        g.lineTo(265, 450);
        g.lineTo(363, 490);
        g.lineTo(365, 385);
        g.lineTo(265, 350);
        g.fill();
        g.moveTo(310, 365);
        g.lineTo(310, 469);
        g.closePath();
        g.stroke();
    }
}

let app = new App();
app.runApplication();

