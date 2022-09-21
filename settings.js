function showSettings() {
    let newDiv = document.getElementById("settings");

    console.log(newDiv);
    if (newDiv === null)
    {
        newDiv = document.createElement("div");
        newDiv.id = "settings"
        newDiv.classList.add("col-6");
        newDiv.classList.add("settingsMenu");
        newDiv.innerText = "Szia!"
        document.body.insertBefore(newDiv, document.body.firstChild);
    } else {
        document.getElementById("settings").remove();
    }
    // newDiv.style.height = '50px';
    // newDiv.style.backgroundColor = 'black';
    // newDiv.style.position = 'fixed';

    console.log('a');
}