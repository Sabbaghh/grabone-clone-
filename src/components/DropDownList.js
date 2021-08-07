import React from 'react';
import '../styles/dropDownList.css';

const DropDownList = ({ list, icon }) => {
	return (
		<div className='dropDownList flex align-center text-secondary'>
			<span className='icon'>
				<i className={icon}></i>
			</span>
			<select>
				{list.map((item) => {
					return <option value={item}>{item}</option>;
				})}
			</select>
		</div>
	);
};

export default DropDownList;
