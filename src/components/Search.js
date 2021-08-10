import React, { useState } from 'react';
import '../styles/Search.css';
const Search = () => {
	const [searchValue, setSearchValue] = useState('');
	return (
		<div className='flex align-center search'>
			<div className='flex align-center search-input'>
				<i className='icon fas fa-search color-secondary opacity-1-2 hide-sm' />
				<input
					value={searchValue}
					onChange={(e) => setSearchValue(e.target.value)}
					type='text'
					placeholder='Search GrapOne'
				/>
			</div>
		</div>
	);
};

export default Search;
