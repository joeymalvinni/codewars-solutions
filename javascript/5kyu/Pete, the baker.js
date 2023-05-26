function cakes (recipe, available) {
	let max = recipe;
	for (item in recipe) {
		max[item] = isNaN(available[item]/(recipe[item])) ? 0 : Math.floor(available[item]/recipe[item]);
	}
	return Math.min(...Object.values(max));
}
