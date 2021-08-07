import React from 'react';
import '../styles/navbar.css';
import DropDownList from './DropDownList';

const Header = () => {
	return (
		<nav className='bg-primary flex space-between p-1 navbar'>
			<div id='banner-brand'>
				<a href='https://new.grabone.co.nz'>
					<img src='./images/brand.svg' alt='brand' />
				</a>
			</div>
			<DropDownList
				list={['Auckland', 'Waikato']}
				icon='fas fa-map-marker-alt'
			/>
		</nav>
	);
};

export default Header;
