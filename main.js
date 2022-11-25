const endDate = new Date('Dec 25 2022 12:00 AM').getTime();

function updateDate()
{
    let now = new Date().getTime();
    let timeleft = endDate - now;

    if (now > endDate) {
        // it's over
        document.getElementById('countdownDiv').innerText = 'Merry Christmas 🤍';
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

function getRandom(first, last) {
    return Math.floor(Math.random() * (last - first + 1) + first) - 1;
}

const backgrounds = [
    "1.png",
    "2.jpg",
]
const l1 = backgrounds.length;

const mobile_backgrounds = [
    "1.jpg",
    "2.jpg",
    "3.png",
]
const l2 = mobile_backgrounds.length;

let sw = screen.width;

if (sw > 0 && sw <= 400) {
    // phone bg
    document.body.style.backgroundImage = `url('assets/mobile-backgrounds/${mobile_backgrounds[getRandom(1, l2)]}')`;
} else if (sw > 400 && sw <= 900) {
    // tablet bg
    document.body.style.backgroundImage = `url('assets/mobile-backgrounds/${mobile_backgrounds[getRandom(1, l2)]}')`;
} else {
    // PC backg
    document.body.style.backgroundImage = `url('assets/backgrounds/${backgrounds[getRandom(1, l1)]}')`;
}