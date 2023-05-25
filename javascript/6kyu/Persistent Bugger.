function persistence(num, steps = 0) {
  if (num.toString().length === 1) return 0;

  let output = num.toString().split("").reduce((a, b) => a * b, 1)
  if (output.toString().length <= 1) {
    return ++steps;
  } else {
    return persistence(output, ++steps);
  }
}
