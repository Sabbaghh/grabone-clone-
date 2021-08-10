import React from 'react';
import DropDownList from './DropDownList';
import { secondaryNavLinks } from '../data/links';
import Search from './Search';

const SecondaryNav = () => (
	<nav className='flex p-1 space-between secondary-nav align-center'>
		<DropDownList list={['Browse Category', 'Waikato']} color='#4F5864' />
		{secondaryNavLinks.map((link) => {
			return (
				<a key={link.id} href={link.link} className='color-secondary'>
					{link.name}
				</a>
			);
		})}
		<Search />
	</nav>
);

export default SecondaryNav;
