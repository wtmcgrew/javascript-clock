// Block of code used to calculate time - getTime() returns the number of milliseconds since January 1, 1970 (00:00:00)
function getTime() {
	let dateTime = new Date();
	let hrs = dateTime.getHours(); // getHours() returns the hour (0 to 23) of a date
	let min = dateTime.getMinutes(); // getMinutes() returns the minutes (0 to 59) of a date
	let sec = dateTime.getSeconds(); //getSeconds() returns the seconds (0 to 59) of a date
	let meridiem = document.getElementById("meridiem");

	/* 
	Using DOM to target meridiem ID to switch between 'AM' and 'PM' depending on hrs value
	We want this to execute first before running conditional statement to use a 12 hour clock
	*/
	if(hrs >= 12) {
		meridiem.innerHTML = "PM";
	}
	else {
		meridiem.innerHTML = "AM";
	}

	// Conditional statement for 12 hour clock; comment out to show 24 hour clock if you want
	if(hrs > 12) {
		hrs -= 12
	}

	// Next 3 conditional statements add leading zeroes to hours, minutes, and seconds
	if(hrs < 10) {
		hrs = "0" + hrs;
	}

	if(min < 10) {
		min = "0" + min;
	}

	if(sec < 10) {
		sec = "0" + sec;
	}


	document.getElementById("hours").innerHTML = hrs;
	document.getElementById("minutes").innerHTML = min;
	document.getElementById("seconds").innerHTML = sec;
}

// The setInterval() method calls a function at specified intervals (in milliseconds)
setInterval(getTime, 1000); // 1000 milliseconds which is equivalent to 1 second; ensures the time isn't static