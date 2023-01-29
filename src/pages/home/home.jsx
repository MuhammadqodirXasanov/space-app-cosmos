import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

export const Home = () => {
	const exploreNav = useNavigate()
	const explore = () => {
		exploreNav('/destination')
	};
	return (
		<div className='home'>
			<div>
				<p className='home__text'>SO, YOU WANT TO TRAVEL TO</p>
				<h1 className='home__head'>SPACE</h1>
				<p className='home__text2'>
					Let's face it; if you want to go to space, you might as well genuinely
					go to outer space and not hover kind of on the edge of it. Well sit
					back, and relax because we'll give you a truly out of this world
					experience!
				</p>
			</div>
			<div className='brs-hover'>
				<button onClick={() => explore()} className='home__round-btn'>
					EXPLORE
				</button>
			</div>
		</div>
	);
};
