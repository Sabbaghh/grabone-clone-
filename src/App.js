import React from 'react';
import NavBar from './components/NavBar';
import Home from './screens/Home';

const App = () => {
	return (
		<>
			<NavBar />
			<Home />
			<div style={{ height: '200vh' }}></div>
		</>
	);
};

export default App;
