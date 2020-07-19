import React, { useState } from 'react';
import '../stylings/GardenCell.css';

const GardenCell = ({ id, crop }) => {
	const [ cropName, setCropName ] = useState(crop);
	// func that toggles if cell has been clicked
	const toggleCellColor = () => {
		if (cropName === 'tomato') {
			setCropName('empty');
		} else if (cropName === 'empty') {
			setCropName('tomato');
		}
	};

	return (
		<div className={`garden-cell ${cropName}`} id={id} onClick={toggleCellColor}>
			{/* <p>{text}</p> */}
		</div>
	);
};

export default GardenCell;
