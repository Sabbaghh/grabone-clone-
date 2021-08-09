import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Card from '../components/Card';
import headerData from '../data/headerData';
import PlainCard from '../components/PlainCard';
import '../styles/HomeScreen.css';

const Home = () => {
	return (
		<div className='HomeScreen'>
			<Banner />
			<div className='flex flex-wrap justify-center mt-1'>
				{headerData.map((cardData) => {
					return <Card key={cardData.id} cardData={cardData} />;
				})}
			</div>
			<div className='flex justify-center align-center'>
				<PlainCard message='Get the best deals delivered direct to your inbox each day' />
			</div>
		</div>
	);
};

export default Home;
