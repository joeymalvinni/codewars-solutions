function spinWords(string){
  return string.split(" ").map(r => {
    if (r.length >= 5) {
      console.log(r.split("").reverse().join(""));
      return r.split("").reverse().join("");
    } else {
      return r;
    }
  }).join(' ');
}
