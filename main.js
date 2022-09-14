//add zeroes when displaying numbers less than 10
function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
}

//declare variables
const date = new Date();
let hours = addZero(date.getHours());
let minutes = addZero(date.getHours());
let seconds = addZero(date.getSeconds());

//show the current time in 00:00:00 format
let currentTime = hours + ":" + minutes + ":" + seconds;