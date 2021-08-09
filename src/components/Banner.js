import React from 'react';

const Banner = () => {
	return (
		<div className='banner flex justify-center align-center flex-direction-column p-2'>
			<a href='#!'>
				<img src='./images/banner-LG.png' alt='banner-LG' className='hide-sm' />
				<img src='./images/banner.png' alt='banner-sm' className='hide-lg' />
			</a>
			<h2 className='text-secondary mt-1 text-center'>
				11th Birthday credit and giveaway promotions {` `}
				<a className='text-primary' href='#!'>
					- full T's & C's here.*
				</a>
			</h2>
		</div>
	);
};

export default Banner;
