// Block of code used to calculate time - getTime() returns the number of milliseconds since January 1, 1970 (00:00:00)
function getTime() {
	let dateTime = new Date();
	let hrs = dateTime.getHours(); // getHours() returns the hour (0 to 23) of a date
	let min = dateTime.getMinutes(); // getMinutes() returns the minutes (0 to 59) of a date
	let sec = dateTime.getSeconds(); //getSeconds() returns the seconds (0 to 59) of a date
	let meridiem = document.getElementById("meridiem");

	if(hrs >= 12) {
		meridiem.innerHTML = "PM";
	}
	else {
		meridiem.innerHTML = "AM";
	}

	// Conditional statement for 12 hour clock; comment out to show 24 hour clock if you want
	if(hrs > 12) {
		hrs = hrs - 12;
	}

	document.getElementById("hours").innerHTML = hrs;
	document.getElementById("minutes").innerHTML = min;
	document.getElementById("seconds").innerHTML = sec;
}

// The setInterval() method calls a function at specified intervals (in milliseconds)
setInterval(getTime, 1000); // 1000 milliseconds which is equivalent to 1 second; ensures the time isn't static