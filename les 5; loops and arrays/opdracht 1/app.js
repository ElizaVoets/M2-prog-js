class App
{
    runApplication()
    {
        let arr = ["Ghost", "Jazmin Bean", "AJR", "Sub Urban", "Melanie Martinez"];

        let headers = document.getElementsByTagName("h1");

        headers[0].innerText = arr[0];
        headers[1].innerText = arr[1];
        headers[2].innerText = arr[2];
        headers[3].innerText = arr[3];
        headers[4].innerText = arr[4];
    }
}

let app = new App();
app.runApplication();