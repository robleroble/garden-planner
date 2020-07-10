import React from 'react';
import '../stylings/GardenCell.css';

const GardenCell = ({id}) => {


	return (
        <div className="garden-cell" id={id}>
            <p>{id}</p>
        </div>
        );
};

export default GardenCell;
