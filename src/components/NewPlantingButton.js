import React, {useState} from 'react';
import '../stylings/NewPlantingButton.css';
import NewPlantingForm from "./NewPlantingForm"
import {FaPlus} from "react-icons/fa"

const NewPlantingButton = () => {
	// state to remember if the add planting form is opened
	const [openForm, setOpenForm] = useState(false)

	// func to open form
	const openPlantingForm = () => {
		setOpenForm(true);
	}
	// func to close form
	const closePlantingForm = () => {
		setOpenForm(false);
	}

	// variable that stores html for the button (when openForm state is false)
	const newPlantingButton =  (
		<div className="new-planting-btn"
			onClick={openPlantingForm}
		>
			<FaPlus />
			<p className="new-planting-btn-text">Add a planting</p>
		</div>
	);

	// variable that store the new planting form (stored in a separate component)
	const newPlantingForm = (
		<NewPlantingForm closePlantingForm={closePlantingForm} />
	)

	if (!openForm) {
		return newPlantingButton;
	} else {
		return newPlantingForm
	}


};

export default NewPlantingButton;
