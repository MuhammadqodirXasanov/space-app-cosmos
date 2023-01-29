import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { logo } from '../assets';
import './layout.css';

export const Layout = () => {
	const menuBar = () => {
		const links = document.querySelector('.links');
		links.classList.toggle('links-tablet');
	};
	return (
		<div>
			<header className='header'>
				<div className='flex'>
				<img className='logo' src={logo} alt='logo' />
				<div className='line' />
				<a onClick={() => menuBar()} href='#' className='menu'>
					<div className='menu-bar'></div>
					<div className='menu-bar'></div>
					<div className='menu-bar'></div>
				</a>
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
