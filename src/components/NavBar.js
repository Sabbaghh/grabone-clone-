import React from 'react';
import '../styles/navbar.css';
import BottomNav from './BottomNav';
import DropDownList from './DropDownList';
import InnerNav from './InnerNav';
import SecondaryNav from './SecondaryNav';

const Header = () => {
	return (
		<>
			<nav className='flex p-1 bg-primary space-between navbar'>
				<div id='brand'>
					<a href='#!'>
						<img src='./images/brand.svg' alt='brand' />
					</a>
				</div>
				<div className='flex'>
					<DropDownList
						list={['Auckland', 'Waikato']}
						icon='fas fa-map-marker-alt'
					/>
					<InnerNav />
					<BottomNav />
				</div>
			</nav>
			<SecondaryNav />
		</>
	);
};

export default Header;
