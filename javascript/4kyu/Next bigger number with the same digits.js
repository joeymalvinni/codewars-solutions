function nextBigger (n) {
  let digits = (n + '').split('');
  let i = digits.length - 1;

  while (i > 0 && digits[i - 1] >= digits[i]) {
    i--;
  }

  if (i === 0) {
    return -1;
  }

  let j = digits.length - 1;

  while (digits[j] <= digits[i - 1]) {
    j--;
  }

  [digits[i - 1], digits[j]] = [digits[j], digits[i - 1]];

  let sortedDigits = digits.slice(i).sort((a, b) => a - b);
  let nextNumber = +(digits.slice(0, i).concat(sortedDigits).join(''));

  return nextNumber;
};
