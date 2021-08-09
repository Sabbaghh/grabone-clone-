import React from 'react';

const BottomNav = () => (
	<div className='flex hide-lg align-center bottom-nav space-between'>
		<a href='#!' className='color-secondary'>
			<div className='flex justify-center flex-direction-column align-center'>
				<i className='fas fa-home' />
				<span>Home</span>
			</div>
		</a>
		<a href='#!' className='color-secondary'>
			<div className='flex justify-center flex-direction-column align-center'>
				<i className='fas fa-search' /> <span>Search</span>
			</div>
		</a>
		<a href='#!' className='color-secondary'>
			<div className='flex justify-center flex-direction-column align-center'>
				<i className='fas fa-align-justify' /> <span>Category</span>
			</div>
		</a>
		<a href='#!' className='color-secondary'>
			<div className='flex justify-center flex-direction-column align-center'>
				<i className='fas fa-shopping-cart' /> <span>Cart</span>
			</div>
		</a>
		<a href='#!' className='color-secondary'>
			<div className='flex justify-center flex-direction-column align-center'>
				<i className='fas fa-user' /> <span>Account</span>
			</div>
		</a>
	</div>
);
export default BottomNav;
