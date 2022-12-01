// Global function

function GlobalFunction()
{
    // Code in de functie
    console.log("This is a global function");
}

// return

function returnFunction()
{
    // variabel in de functie
    let voorbeeldVariable1 = "Een waarde";
    return voorbeeldVariable1;
}

// class method

class App
{
    // "function" is niet nodig

    // Function in de class is een method
    RunApplication()
    {
        console.log("Hello, world!");
        // roept andere methode in het object op
        this.ClassFunction()
    }

    ClassFunction()
    {
        console.log("epic code omigot");
    }

}

// Calls

// roept globale functie op:
GlobalFunction();

// Roept de functie met een variabele op
returnFunction();

// Roept de methods in een object op:
let app = new App();
app.RunApplication();
app.ClassFunction();


// More difficult stuff

//