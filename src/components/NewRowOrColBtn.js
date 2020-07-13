import React from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { AiOutlineInsertRowRight, AiOutlineInsertRowBelow } from 'react-icons/ai';
import '../stylings/NewRowOrColBtn.css';

const NewRowOrColBtn = ({ direction, addColumn, minusColumn, addRow, minusRow }) => {
	const newRowBtn = (
		<div className="row-btn">
			<div className="plus-row" onClick={() => addRow()}>
				<FaPlus className="plus-icon-row" />
			</div>
			<div className="minus-row" onClick={() => minusRow()}>
				<FaMinus className="plus-icon-row" />
			</div>
		</div>
	);

	const newColumnBtn = (
		<div className="col-btn">
			<div className="plus-col" onClick={() => addColumn()}>
				<FaPlus className="plus-icon-col" />
			</div>
			<div className="minus-col" onClick={() => minusColumn()}>
				<FaMinus className="plus-icon-col" />
			</div>
		</div>
	);

	if (direction === 'column') {
		return newColumnBtn;
	} else {
		return newRowBtn;
	}
};

export default NewRowOrColBtn;
