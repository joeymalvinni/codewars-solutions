function humanReadable (seconds) {
  const hours = 60*60;
  const minutes = 60;
  
  let time = {
    hours: 0,
    minutes: 0,
    seconds: 0
  }
  
  if (Math.floor(seconds/hours)) {
    time.hours = Math.floor(seconds/hours);
    seconds = seconds - Math.floor(seconds/hours)*hours;
  }
  
  if (Math.floor(seconds/minutes)) {
    time.minutes = Math.floor(seconds/minutes);
    seconds = seconds - Math.floor(seconds/minutes)*minutes;
  }
  
  time.seconds = seconds;
  
  console.log(time)
  
  return `${(time.hours.toString().length < 2) ? `0${time.hours}` : time.hours}:${(time.minutes.toString().length < 2) ? `0${time.minutes}` : time.minutes}:${(time.seconds.toString().length < 2) ? `0${time.seconds}` : time.seconds}`
}
