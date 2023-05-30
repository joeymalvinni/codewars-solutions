function alphabetPosition(text) {
  return text.toLowerCase().split('').map(r => {
    if (r.charCodeAt(0) >= 97 && r.charCodeAt(0) <= 122) {
      return r.charCodeAt(0) - 96;
    } else return -1;
  }).filter(n => n >= 0).join(' ');
}
