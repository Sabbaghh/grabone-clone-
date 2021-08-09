import React from 'react';
import '../styles/card.css';
import Subscribe from './Subscribe';

const PlainCard = ({ message }) => {
	return (
		<div className='p-2 mt-1 plain-card'>
			<h1 className='text-primary'>{message}</h1>
			<Subscribe />
		</div>
	);
};

export default PlainCard;
