import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { logo } from '../assets';
import './layout.css';

export const Layout = () => {
	return (
		<div>
			<header className='header'>
				<img className='logo' src={logo} alt='logo' />
				<div className='line' />
				<div className='menu'>
					<div className='menu-bar'></div>
					<div className='menu-bar'></div>
					<div className='menu-bar'></div>
				</div>
				<div className='links'>
					<Link className='nav-link' to='/'>
						00 HOME <div className='bottom-line'></div>
					</Link>
					<Link className='nav-link' to='/destination'>
						01 DESTINATION <div className='bottom-line'></div>
					</Link>
					<Link className='nav-link' to='/crew'>
						02 CREW <div className='bottom-line'></div>
					</Link>
					<Link className='nav-link' to='/technology'>
						03 TECHNOLOGY <div className='bottom-line'></div>
					</Link>
				</div>
			</header>
			<main>
				<Outlet />
			</main>
		</div>
	);
};
