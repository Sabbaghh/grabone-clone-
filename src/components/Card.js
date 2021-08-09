import React from 'react';
import '../styles/card.css';

const Card = ({ cardData }) => {
	return (
		<div className='mt-1 card'>
			{cardData.image && (
				<div
					className='card-image'
					style={{ backgroundImage: `url("${cardData.image}")` }}
				>
					{cardData.badge && (
						<img className='card-badge' src={cardData.badge} alt='badge' />
					)}
					<div className='flex justify-center favorite align-center'>
						<i className='far fa-heart'></i>
					</div>
				</div>
			)}
			<div className='p-1'>
				{cardData.title && (
					<h2 className='text-secondary mt-1-2'>{cardData.title}</h2>
				)}
				{cardData.brand && (
					<p className='text-primary mt-1-2'>{cardData.brand}</p>
				)}
				{cardData.location && (
					<p className='text-secondary mt-1-2 opacity-1-2'>
						{cardData.location}
					</p>
				)}
				{cardData.numOfBuyers && (
					<div className='flex mt-1 space-between position-relative'>
						<span className='text-secondary opacity-1-2 bought'>
							{cardData.numOfBuyers} bought
						</span>
						<div className='prices'>
							<p className='text-end text-primary'>From</p>
							<div>
								<span className='font-sm text-secondary opacity-1-2'>$56</span>{' '}
								{`  `}
								<span className='text-lg text-primary'>$35</span>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Card;
