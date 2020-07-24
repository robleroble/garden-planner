import React from 'react';
// import NewPlantingButton from './NewPlantingButton';
import '../stylings/GardenPlan.css';
import GardenPlot from './GardenPlot';
import GardenFooter from './GardenFooter';
import GardenCropSelector from './NewCropForm';
import GardenColors from './GardenColors';
import GardenCropBtn from './GardenCropBtn';

const GardenPlan = () => {
	return (
		<div id="app-theme">
			<h1 style={{ textAlign: 'center' }}>Garden Plan</h1>
			<div id="garden-plus-colors">
				<GardenCropBtn />
				<GardenPlot />
				<GardenCropBtn />
			</div>
			<div id="footer">
				<GardenFooter />
			</div>
		</div>
	);
};

export default GardenPlan;
