/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

import React from 'react';

const Filter = ({ popular, setFiltered, activeGenre, setActiveGenre }) => {
	useEffect(() => {
		if (activeGenre === 0) {
			setFiltered(popular);
			return;
		}

		const filtered = popular.filter((movie) =>
			movie.genre_ids.includes(activeGenre)
		);
		setFiltered(filtered);
	}, [activeGenre]);

	const genreTabs = [
		{
			name: 'All',
			id: 0,
			color: '#51e2f5',
		},
		{
			name: 'Comedy',
			id: 35,
			color: '#cdd422',
		},
		{
			name: 'Action',
			id: 28,
			color: '#ff8928',
		},
		{
			name: 'Crime',
			id: 80,
			color: '#68d388',
		},
		{
			name: 'Adventure',
			id: 12,
			color: '#ffa8B6',
		},
		{
			name: 'Horror',
			id: 27,
			color: '#ff0028',
		},
		{
			name: 'Family',
			id: 10751,
			color: '#e1b382',
		},
	];

	return (
		<div className='filter-container'>
			{genreTabs.map((b) => {
				return (
					<button
						key={b.id}
						style={
							activeGenre === b.id
								? {
										backgroundColor: b.color,
										color: '#fff',
										border: 'none',
										scale: '1.2',
								  }
								: { backgroundColor: 'white', color: b.color }
						}
						onClick={() => setActiveGenre(b.id)}
					>
						{b.name}
					</button>
				);
			})}
		</div>
	);
};

export default Filter;
