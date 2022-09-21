const endDate = new Date('Dec 25 2022 12:00 AM').getTime();

function updateDate()
{
    let now = new Date().getTime();
    let timeleft = endDate - now;

    if (now > endDate) {
        // it's over
        document.getElementById('countdownDiv').innerText = 'Éééés le is telt a visszaszámlálás, ma végre újra találkozunk 🤍';
        clearInterval(timer);
        return;
    }
        
    let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    document.getElementById('num1').innerText = days;
    document.getElementById('num2').innerText = hours;
    document.getElementById('num3').innerText = minutes;
    document.getElementById('num4').innerText = seconds;
}

let timer = setInterval(updateDate, 1000);

let sw = screen.width;

if (sw > 0 && sw <= 400) {
    // phone bg
    document.body.style.backgroundImage = "url('assets/mobile-backgrounds/1.jpg')";
} else if (sw > 400 && sw <= 900) {
    // tablet bg
    document.body.style.backgroundImage = "url('assets/mobile-backgrounds/1.jpg')";
} else {
    // big backg
    document.body.style.backgroundImage = "url('assets/backgrounds/1.png')";
}