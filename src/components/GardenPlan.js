import React from 'react';
// import NewPlantingButton from './NewPlantingButton';
import '../stylings/GardenPlan.css';
import GardenPlot from './GardenPlot';
import GardenFooter from './GardenFooter';
import GardenCropSelector from './NewCropForm';
import GardenColors from './GardenColors';
import GardenCropsList from './GardenCropsList';

const GardenPlan = () => {
	return (
		<div id="app-theme">
			<h1 style={{ textAlign: 'center' }}>Garden Plan</h1>
			<div id="garden-plus-colors">
				<GardenCropsList />
				<GardenPlot />
			</div>
			<div id="footer">
				<GardenFooter />
			</div>
		</div>
	);
};

export default GardenPlan;
