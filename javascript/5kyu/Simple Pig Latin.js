function pigIt(str){
  return str.split(" ").map(r => {
    if (!isPunctuation(r)){
      return r.substr(1) + r.substr(0, 1) + "ay";
    } else {
      return r;
    }
  }).join(" ")
}
                            
function isPunctuation(str) {
  const punctuationRegex = /^[^\w\s]+$/;
  return punctuationRegex.test(str);
}
