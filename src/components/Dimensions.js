import React from 'react';
import '../stylings/Dimensions.css';

const Dimensions = ({ direction, value, setColumns }) => {

	return (
		<div className={`${direction}-dimensions`}>
			<div className={`${direction}-end-point`} />
			<div className={`${direction}-dimensions-bar`}>
				<h1 className={`${direction}-value`}>{value}</h1>
			</div>
			<div className={`${direction}-end-point`} />
		</div>
	);
};

export default Dimensions;
