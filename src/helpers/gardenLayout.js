export function createLayout(length, width) {
	// creates rows based on the width (which is actually the height on screen)
	let layout = [];
	for (let i = 1; i <= width; i++) {
		// for each row, create an array
		layout.push([]);
		// create objects with coords and empty space in each row for the length
		for (let j = 1; j <= length; j++) {
			layout[i - 1].push({
				xPos: j,
				yPos: width - i + 1,
				crop: 'empty'
			});
		}
	}
	return layout;
}

// function that take the layout stored in an array in state, and creates a grid of cells
// gardenHolder is a div stored as a variable to put the garden in
export function createHTMLLayout(array) {
	const gardenHolder = document.createElement('div');
	// console.log(gardenHolder);
	for (let i = 0; i < array.length; i++) {
		const row = document.createElement('div');
		row.setAttribute('id', `row-${i + 1}`);
		console.log(typeof row);
		for (let j = 0; j < array[i].length; j++) {
			const cell = document.createElement('div');
			cell.setAttribute('id', `${array[i][j].xPos}-${array[i][j].yPos}`);
			cell.className = `${array[i][j].crop}`;
			row.append(cell);
		}
		gardenHolder.append(row);
	}
	return gardenHolder;
}
