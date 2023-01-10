// selectects the title



// Returns a random integer from 0 tot 0.999999...


// Changes the background color
class App{
    ChangeColor()
    {
        let titel = document.getElementById("newstitle");

        let randInt = Math.random();
        console.log(randInt);

        if (randInt == 0)
        {
            titel.style.backgroundColor ="#c79f9b";
        }

        else if (randInt < 0.2)
        {
            titel.style.backgroundColor = "#c0d19f";
        }

        else if (randInt > 0.2 && randInt < 0.7)
        {
            titel.style.backgroundColor = "#9bccc4"
        }
        else if (randInt > 0.6)
        {
                titel.style.backgroundColor = "#b99fd1"
        }
    }
}

let app = new App();
app.ChangeColor();