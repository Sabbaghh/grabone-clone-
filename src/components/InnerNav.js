import React from 'react';
import DropDownList from './DropDownList';

const InnerNav = () => (
	<div className='flex align-center space-between inner-nav'>
		<a
			href='#!'
			className='flex justify-center flex-direction-column align-center'
		>
			<i className='far fa-heart' />
		</a>
		<a
			href='#!'
			className='flex justify-center flex-direction-column align-center'
		>
			<i className='fas fa-shopping-cart' />
		</a>
		<DropDownList icon='fas fa-user' />
		<a href='#!' className='flex justify-center space-between align-center'>
			<i className='far fa-envelope' />
			<span>Subscribe</span>
		</a>
	</div>
);

export default InnerNav;
