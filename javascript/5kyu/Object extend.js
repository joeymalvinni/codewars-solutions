// spaghetti solution
function extend (...objects) {
  let final = {};
  
  for (let i = 0; i < objects.length; ++i) {
    if (!isObject(objects[i])) continue;

    for (let j = 0; j < Object.keys(objects[i]).length; ++j) {
		  if (!final[Object.keys(objects[i])[j]] && final[Object.keys(objects[i])[j]] !== null && final[Object.keys(objects[i])[j]] !== false) {
				final[Object.keys(objects[i])[j]] = Object.values(objects[i])[j];
			}	
		}
  }

	return final;
}
