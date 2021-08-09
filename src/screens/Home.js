import React from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import headerData from '../data/headerData';
import PlainCard from '../components/PlainCard';
import Section from '../components/Section';
import '../styles/HomeScreen.css';

const Home = () => {
	return (
		<main className='flex justify-center HomeScreen align-center flex-direction-column'>
			<Banner />
			<div className='flex flex-wrap justify-center w-full align-center'>
				{headerData.map((cardData) => {
					return <Card key={cardData.id} cardData={cardData} />;
				})}
			</div>
			<PlainCard message='Get the best deals delivered direct to your inbox each day' />
			<Section sectionName='Featured Auckland deals' cardData={headerData} />
			<Section sectionName='Escapes' cardData={headerData} />
			<Section
				sectionName='Activities, Events & Outdoors'
				cardData={headerData}
			/>
		</main>
	);
};

export default Home;
