import React from 'react';
import { FaPlus } from 'react-icons/fa';
import '../stylings/NewRowOrColBtn.css';

const NewRowOrColBtn = ({ direction, addColumn, addRow }) => {
	const newRowBtn = (
		<div className="row-btn" onClick={() => addRow()}>
			<FaPlus className="plus-icon-row" />
			<h3>Add Row</h3>
		</div>
	);

	const newColumnBtn = (
		<div className="col-btn" onClick={() => addColumn()}>
			<FaPlus className="plus-icon-col" />
			<h3 id="col-btn-text">Add</h3>
		</div>
	);

	if (direction === 'column') {
		return newColumnBtn;
	} else {
		return newRowBtn;
	}
};

export default NewRowOrColBtn;
