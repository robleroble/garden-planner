import React from 'react';
// import NewPlantingButton from './NewPlantingButton';
import '../stylings/GardenPlan.css';
import GardenPlot from './GardenPlot';

const GardenPlan = () => {
	return (
		<div>
			<h1 style={{ textAlign: 'center' }}>Garden Plan</h1>
			<GardenPlot />
		</div>
	);
};

export default GardenPlan;
