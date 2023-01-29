import React from 'react';
import { Link } from 'react-router-dom';
import './destination.css';

export const Destination = (props) => {
	return (
		<div className='destin '>
			<div className=''>
				<p className='destin__txt'>01 Pick your destination</p>
				<img className='destin__img' src={props.image} alt='destination img' />
			</div>
			<div>
				<Link to='/destination/' className='destin__link'>MOON</Link>
				<Link to='/destination/destimars' className='destin__link'>MARS</Link>
				<Link to='/destination/destieuropa' className='destin__link'>EUROPA</Link>
				<Link to='/destination/destititan' className='destin__link'>TITAN</Link>
				<h1 className='destin__head'>{props.head}</h1>
				<p className='destin__desc'>{props.descrip}</p>
				<div className='destin__dist-time'>
					<div className='destin__dist-box'>
						<p className='destin__dist-txt'>AVG. DISTANCE</p>
						<h3 className='destin__dist-val'>{props.distVal}</h3>
					</div>
					<div className='destin__dist-box'>
						<p className='destin__dist-txt'>Est. travel time</p>
						<h3 className='destin__dist-val'>{props.timeVal}</h3>
					</div>
				</div>
			</div>
		</div>
	);
};
