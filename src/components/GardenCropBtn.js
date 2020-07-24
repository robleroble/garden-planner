import React, { useState } from 'react';
import NewCropForm from './NewCropForm';

const GardenCropBtn = () => {
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
		<div>
			<button onClick={openFormBtn}>Make New Color</button>
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

export default GardenCropBtn;
