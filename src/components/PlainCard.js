import React from 'react';
import '../styles/card.css';

const PlainCard = ({ message }) => {
	return (
		<div className='plain-card p-2 mt-1'>
			<h1 className='text-primary'>{message}</h1>
			<div className='flex align-center mt-2 w-full'>
				<div className='flex align-center email-input'>
					<i className=' icon far fa-envelope color-secondary opacity-1-2 hide-sm' />
					<input type='email' placeholder='Enter email address' />
				</div>
				<button className='bg-primary sub-btn'>Subscribe</button>
			</div>
		</div>
	);
};

export default PlainCard;
