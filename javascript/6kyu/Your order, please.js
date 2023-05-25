function order(words) {
  if (!words) return "";

  let s = words.split(" ");
  
  let nums = s.map(n => n.split("").filter(r => !isNaN(Number(r))).join(""));
  
  let wordObjects = s.map((word, index) => ({ word, num: nums[index] }));
  
  wordObjects.sort((a, b) => parseInt(a.num) - parseInt(b.num));
  
  return wordObjects.map(obj => obj.word).join(" ");
}
