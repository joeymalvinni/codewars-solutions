// refactor to use reduce
// use XOR because an even amount of numbers in an array will cancel, leaving the number seen an odd amount of times
function findOdd(a) {
  return a.reduce((n, r) => n ^= r, 0);
}
