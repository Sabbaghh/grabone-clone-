import React from 'react';
import Banner from './Banner';
import Card from './Card';
import headerData from '../data/headerData';

const Header = () => {
	return (
		<header>
			<Banner />
			<div className='flex space-around flex-wrap'>
				{headerData.map((cardData) => {
					return <Card key={cardData.id} cardData={cardData} />;
				})}
			</div>
		</header>
	);
};

export default Header;
