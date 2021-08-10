import React from 'react';
import Card from './Card';
const Section = ({ sectionName, cardData }) => {
	return (
		<section className='flex justify-center mt-2 flex-direction-column '>
			<div className='flex p-1 section-header'>
				<h3 className='color-secondary'>{sectionName}</h3>
				<a href='#!' className='flex color-primary section-link align-center'>
					View More
					<span>&gt;</span>
				</a>
			</div>
			<div className='flex flex-wrap justify-center w-full'>
				{cardData.map((cardData) => {
					return <Card key={cardData.id} cardData={cardData} />;
				})}
			</div>
		</section>
	);
};

export default Section;
