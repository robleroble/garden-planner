import React, {useState} from 'react';
import GardenFooterButton from './GardenFooterButton';
import '../stylings/GardenFooter.css';
import SetDimensionsForm from "./SetDimensionsForm"

const GardenFooter = () => {
	// state to remember if one of the buttons has been clicked
	// RMs the buttons and displays the corresponding form
	const [openForm, setOpenForm] = useState(false);

	// func to open form
	const openFormBtn = () => {
		setOpenForm(true);
		console.log("open")
	}

	// func to close form
	const closeFormBtn = () => {
		console.log("close")
		setOpenForm(false)
	}

	const footerBtns = (
		<div id="footer">
			<div onClick={openFormBtn}>
				<GardenFooterButton 
					title="Set Dimensions" 
				/>
			</div>
			<div>
				<GardenFooterButton title="Change Grid Units" />
			</div>
			<div>
				<GardenFooterButton title="Default Gardens" />
			</div>
		</div>
	)

	const setDimensionsForm = (
		<div id="footer">
			<SetDimensionsForm closeFormBtn={closeFormBtn} />
		</div>
	)

	if (!openForm) {
		return footerBtns;
	} else {
		return setDimensionsForm;
	}
	
};

export default GardenFooter;
