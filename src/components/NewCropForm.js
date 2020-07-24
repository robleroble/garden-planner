import React, { useState } from 'react';
import '../stylings/NewCropForm.css';

const NewCropForm = ({ closeFormBtn }) => {
	const INITIAL_STATE = {
		crop: ''
	};

	const [ formData, setFormData ] = useState(INITIAL_STATE);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((formData) => ({
			...formData,
			[name]: value
		}));
	};

	return (
		<div id="garden-crop-selector-container">
			<p>New Color & Cover Form</p>
			<input type="color" />
			<button onClick={closeFormBtn}>close</button>
		</div>
	);
};

export default NewCropForm;
