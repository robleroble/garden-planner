import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../stylings/GardenCell.css';

const GardenCell = ({ row, col }) => {
	const gardenGrid = useSelector((store) => store.grid);
	const dispatch = useDispatch();

	function makeTomato() {
		dispatch({
			type: 'CHANGE_CROP',
			cellRow: Number(row),
			cellCol: Number(col)
		});
	}

	return (
		<div className={`garden-cell ${gardenGrid[row][col].crop}`} row={row} col={col} onClick={makeTomato}>
			<p>
				{row}-{col}
			</p>
		</div>
	);
};

export default GardenCell;
