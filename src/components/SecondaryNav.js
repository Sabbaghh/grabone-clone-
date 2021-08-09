import React from 'react';
import DropDownList from './DropDownList';

const SecondaryNav = () => (
	<nav className='flex p-1 space-between secondary-nav align-center'>
		<DropDownList list={['Browse Category', 'Waikato']} color='#4F5864' />
		<a href='#!' className='color-secondary'>
			What's New
		</a>
		<a href='#!' className='color-secondary'>
			Trending
		</a>
		<a href='#!' className='color-secondary'>
			For You
		</a>
		<a href='#!' className='color-secondary'>
			Shop Product
		</a>
	</nav>
);

export default SecondaryNav;
