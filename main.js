//////*clock function*//////

function updateClock(){
    var now = new Date();
    var dayname = now.getDay(),
        month = now.getMonth(),
        date = now.getDate(),
        year = now.getFullYear(),
        hr = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds(),
        period = "AM";

        Number.prototype.pad = function(digits){
            for(var n = this.toString(); n.length < digits; n =0 + n);
            return n;
        }

        if(hr == 0){
            hr = 12;
        }
        if(hr > 12){
            hr = hr - 12;
            period = "PM";
        }

        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var ids = ["dayname", "month", "daynumber", "year", "hour", "minutes", "seconds", "period"];
        var values = [weekdays[dayname], months[month], date.pad(2), year, hr.pad(2), min.pad(2), sec.pad(2), period];

        for(var i = 0; i < ids.length; i++)
        document.getElementById(ids[i]).firstChild.nodeValue = values [i];
    }

function initClock() {
    updateClock();
    window.setInterval("updateClock()", 1);
}

//////*alarm function*//////

let alarmTime = null;
let alarmTimeout = null;

function setAlarmTime(value) {
    alarmTime = value;
    console.log(alarmTime);
}

function setAlarm() {
    if(alarmTime) {
        const currentTime = new Date;
        const untilAlarm = new Date(alarmTime);

        if (untilAlarm > currentTime) {
            const ringAlarm = untilAlarm.getTime() - currentTime.getTime();
            alarmTimeout = setTimeout(() => alert("WAKE UP!!!"), ringAlarm); /*replace alert with audio file that loops until CLEAR button pressed?*/
            alert("Alarm set");
        }
    }
}

function clearAlarm() {
    if (alarmTimeout) {
        clearTimeout(alarmTimeout);
        alert("Alarm cleared");
        /*if manage to add audio: figure out how to pause loop here*/
    }
}

