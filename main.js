function updateClock(){
    var now = new Date();
    var dayname = now.getDay(),
        month = now.getMonth(),
        date = now.getDate(),
        year = now.getFullYear,
        hr = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds(),
        period = "AM";

        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var ids = ["dayname", "month", "daynumber", "year", "hour", "minutes", "seconds", "period"];
        var values = [weekdays[dayname], months[month], date, year, hr, min, sec, period];

        for(var i = 0; i < ids.length; i++)
        document.getElementById(ids[i]).firstChild.nodeValue = values [i];
    }

function initClock() {
    updateClock();
    window.setInterval("updateClock()", 1);
}