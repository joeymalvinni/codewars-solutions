 function findOdd(a) {
  let result = 0;
  
  for (let i = 0; i < a.length; i++) {
    // use XOR because an even amount of numbers in an array will cancel, leaving the number seen an odd amount of times
    result ^= a[i];
  }
  
  return result;
}
