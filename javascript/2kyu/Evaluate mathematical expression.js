function calc(expr) {
  let stripped = expr.replace(/\s/g, '');
  let final = stripped.replace(/\--/g, '+');

  while (/\(/.test(final)) {
    final = final.replace(/\(([^()]*)\)/, (_, inner) => {
      return calc(inner);
    });
  }

  final = final.replace(/\--/g, '+');
  final = final.replace(/(\/|\*)(\+)/, '$1');
	final = final.replace(/(\+|\-)(\+)/, '$1');
	
  while (/\*|\//.test(final)) {
    // https://www.regular-expressions.info/optional.html
    final = final.replace(/(-?\d*\.?\d+)(\*|\/)(-?\d*\.?\d+)/, (_, left, op, right) => {
      if (op === '/') return parseFloat(left) / parseFloat(right);
      else return parseFloat(left) * parseFloat(right);
    });
  }
  while (/(-?\d*\.?\d+)(\+|-)(-?\d*\.?\d+)/.test(final)) {
    // https://www.regular-expressions.info/optional.html
    final = final.replace(/(-?\d*\.?\d+)(\+|-)(-?\d*\.?\d+)/, (_, left, op, right) => {
      if (op === '-') return parseFloat(left) - parseFloat(right);
      else return parseFloat(left) + parseFloat(right);
    });
  }

  return parseFloat(final);
}
