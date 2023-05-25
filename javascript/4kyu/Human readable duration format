function formatDuration (seconds) {
	if (!seconds) return 'now';
	
  const minutes = 60;
  const hours = 60 * 60;
  const days = 60 * 60 * 24;
  const years = 60 * 60 * 24 * 365;

	let str = "";
	let time = [
		{unit: 'year', time: 0},
		{unit: 'day', time: 0},
		{unit: 'hour', time: 0},
		{unit: 'minute', time: 0},
		{unit: 'second', time: 0}
	]
	
	let yearsInTime = Math.floor(seconds/years);
	if (yearsInTime) {
		time[0].time = yearsInTime;
		seconds = seconds - (yearsInTime * years);
	}

	let daysInTime = Math.floor(seconds/days);
	if (daysInTime) {
		time[1].time = daysInTime;
		seconds = seconds - (daysInTime * days);
	}

	let hoursInTime = Math.floor(seconds/hours);
	if (hoursInTime) {
		time[2].time = hoursInTime;
		seconds = seconds - (hoursInTime * hours);
	}

	let minutesInTime = Math.floor(seconds/minutes);
	if (minutesInTime) {
		time[3].time = minutesInTime;
		seconds = seconds - (minutesInTime * minutes);
	}
	
	time[4].time = seconds;

	let nonZeroTimes = time.filter(n => n.time != 0);

	let arr = nonZeroTimes.map(n => {
		return `${n.time} ${n.unit}${n.time !== 1 ? 's' : ''}`;
	})

	if (arr.length == 1) return arr[0];

	let lastTime = arr.pop();
	
	return `${arr.join(', ')} and ${lastTime}`
}
