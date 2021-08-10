import React, { useState } from 'react';
import '../styles/Subscribe.css';
const Subscribe = () => {
	const [subscribeValue, setSubscribeValue] = useState('');
	return (
		<div className='flex w-full mt-2 align-center'>
			<div className='flex align-center email-input'>
				<i className=' icon far fa-envelope color-secondary opacity-1-2 hide-sm' />
				<input
					value={subscribeValue}
					onChange={(e) => setSubscribeValue(e.target.value)}
					type='email'
					placeholder='Enter email address'
				/>
			</div>
			<button className='bg-primary sub-btn'>Subscribe</button>
		</div>
	);
};

export default Subscribe;
