function solution(input, markers) {
  let split = input.split('\n');
  
  let removedComments = split.map(r => {
    let str = r;
    
    for (let i = 0; i < markers.length; ++i) {
      if (str.indexOf(markers[i]) !== -1) {
        str = str.slice(0, str.indexOf(markers[i])); 
      }
      
      str = str.trim();
    }
    return str;
  })
  
  return removedComments.join('\n')
}
