import React from 'react';
// import NewPlantingButton from './NewPlantingButton';
import '../stylings/GardenPlan.css';
import GardenPlot from './GardenPlot';
import GardenFooter from "./GardenFooter"

const GardenPlan = () => {
	return (
		<div id="app-theme">
			<h1 style={{ textAlign: 'center' }}>Garden Plan</h1>
			<GardenPlot />
			<div id="footer">
			<GardenFooter />
			</div>
		</div>
	);
};

export default GardenPlan;
