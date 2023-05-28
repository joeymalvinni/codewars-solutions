function justify(text, width) {
  let lines = [];
  let words = text.split(" ");
	let line = [];
	let lineLength = 0;

  for (let i = 0; i < words.length; ++i) {
		if (line.length + words[i].length + lineLength <= width) {
			line.push(words[i]);
			lineLength += words[i].length;
		} else {
			lines.push(line.join(' ').trim());
			line = [words[i]];
			lineLength = words[i].length;
		}
	}

	lines.push(line.join(' '));
  	
  for (let i = 0; i < lines.length - 1; ++i) {
    let curr = lines[i].trim().split(' ');
    let totalSpaces = width - curr.join('').length;
    let gaps = curr.length - 1;
    let spacesPerGap = Math.floor(totalSpaces / gaps);
    let extraSpaces = totalSpaces % gaps;

    let final = '';

    for (let j = 0; j < curr.length - 1; ++j) {
      final += curr[j] + ' '.repeat(spacesPerGap + (j < extraSpaces ? 1 : 0));
    }
		
    final += curr[curr.length - 1];

    lines[i] = final;
  }

  return lines.join('\n');
}
