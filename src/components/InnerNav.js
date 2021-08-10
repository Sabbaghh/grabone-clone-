import React from 'react';
import DropDownList from './DropDownList';
import { innerNavLinks } from '../data/links';
const InnerNav = () => (
	<div className='flex align-center space-between inner-nav'>
		{innerNavLinks.map((link) => {
			return (
				<a
					key={link.id}
					href={link.link}
					className='flex justify-center flex-direction-column align-center'
				>
					<i className={link.icon} />
				</a>
			);
		})}
		<DropDownList icon='fas fa-user' />
		<a href='#!' className='flex justify-center space-between align-center'>
			<i className='far fa-envelope' />
			<span>Subscribe</span>
		</a>
	</div>
);

export default InnerNav;
