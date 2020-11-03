import React, { useState } from 'react';
import NewCropForm from './NewCropForm';
import '../stylings/GardenCropsList.css';

const GardenCropsList = () => {
	const [ openForm, setOpenForm ] = useState(false);

	// func to open form
	const openFormBtn = () => {
		setOpenForm(true);
	};

	// func to close form
	const closeFormBtn = () => {
		setOpenForm(false);
	};

	const newCropBtn = (
		<div id="crop-list">
			<div id="title-and-list">
				<h3 id="title">Crops</h3>
			</div>
			<div id="open-color-form" onClick={openFormBtn}>Make New Color</div>
		</div>
	);

	const newCropForm = (
		<div>
			<NewCropForm closeFormBtn={closeFormBtn} />
		</div>
	);

	if (!openForm) {
		return newCropBtn;
	} else {
		return newCropForm;
	}
};

export default GardenCropsList;
