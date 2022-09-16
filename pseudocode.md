# ALARM CLOCK

## ABOUT
- clock needs to tell time in 00:00:00 format
- clock needs to sound an alarm at a given time
# OPTIONAL
- clock can display day, month, year, date
- clock can display AM/PM
- user can set and clear alarm

## INIT: create variables
1. NOW: stores current time
2. DAYNAME: stores current day of the week (ex. Monday)
3. DAYS: array of all days
4. MONTH: stores current month (ex. September)
5. MONTHS: array of all months
6. DATE: stores the current date (ex. 13)
7. YEAR: current year (2022)
8. HR: current hour
9. MIN: current minutes
10. SEC: current seconds
11. PERIOD: whether the current time is AM or PM

## FUNCTIONALITY

**FUNCTION initClock**
> 1. call updateClock function
> 2. sets interval to 1

**FUNCTION updateClock**
> 1. define variables 1-9 above
> 2. return time number values in 00:00:00 format
>>IF hour = 0
>>> THEN display as 12
>>IF hour > 12
>>>THEN subtract 12 (display non-military) and change period to PM

**FUNCTION setAlarmTime**
> 1. INPUT user's alarm time
> 2. log alarm time

**FUNCTION setAlarm**
> 1. INPUT click
> 2. IF time until alarm > current time
>>>THEN run until time runs out
> 3. IF time runs out
>>>THEN alert "wake up"

**FUNCTION clearAlarm**
> 1. INPUT click
> 2. IF alarm has rung
>>>THEN alert "alarm cleared"



## START: begin program; run clock automatically, set/clear alarm according to user input, 
initClock
<br>
updateClock (runs continuously)
<br>
alarmTime
<br>
setAlarm
<br>
clearAlarm
<br>
## END: end program or set new alarm (repeat from alarmTime)
