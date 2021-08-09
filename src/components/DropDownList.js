import React from 'react';
import '../styles/dropDownList.css';

const DropDownList = ({ list, icon, color }) => {
	return (
		<div className='flex text-white dropDownList align-center'>
			{icon && (
				<span className='icon'>
					<i
						className={icon}
						style={color ? { color: color } : { color: '#FFF' }}
					></i>
				</span>
			)}

			<select
				className='color-secondary'
				style={color ? { color: color } : { color: '#FFF' }}
			>
				{list?.map((item, index) => {
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
