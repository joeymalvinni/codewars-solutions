function moveZeros(arr) {
  // remove all zeros from the initial values and concat this array with all of the zeros in a seperate array.
  return arr.filter(n => n !== 0).concat(arr.filter(n => n === 0));
}
