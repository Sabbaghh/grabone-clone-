import React from 'react';
import '../styles/dropDownList.css';

const DropDownList = ({ list, icon }) => {
	return (
		<div className='dropDownList flex align-center text-white'>
			<span className='icon'>
				<i className={icon}></i>
			</span>
			<select>
				{list.map((item, index) => {
					return (
						<option key={index} value={item}>
							{item}
						</option>
					);
				})}
			</select>
		</div>
	);
};

export default DropDownList;
