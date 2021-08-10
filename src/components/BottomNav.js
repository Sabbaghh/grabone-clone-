import React from 'react';
import { bottomNavLinks } from '../data/links';
const BottomNav = () => (
	<div className='flex hide-lg align-center bottom-nav space-between'>
		{bottomNavLinks.map((link) => {
			return (
				<a
					key={link.id}
					href={link.link}
					className='flex justify-center color-secondary flex-direction-column align-center'
				>
					<i className={link.icon} />
					<span>{link.name}</span>
				</a>
			);
		})}
	</div>
);
export default BottomNav;
