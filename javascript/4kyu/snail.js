// SNAIL

function snail (arr) {
	let n = arr[0].length; 
	if (n == 0) return arr[0];
  
	let sortedArr = [];

	while(arr.length) {
    for(let j = 0; j < arr.length; ++j) {
      sortedArr.push(arr[0].shift());
    }
    arr.shift();

	  if (!arr.length) break;
		
    for (let i = 0; i < arr.length - 1; ++i) {
		  sortedArr.push(arr[i].pop());
    }

	  let lastArrayLength = arr[arr.length-1].length;

	  for (let i = 0; i < lastArrayLength; ++i) {
		  sortedArr.push(arr[arr.length - 1].pop());
	  }
	  arr.pop();
	
	  for (let i = arr.length - 1; i >= 0; --i) {
		  sortedArr.push(arr[i].shift());
    }	
	}
	return sortedArr;
}
