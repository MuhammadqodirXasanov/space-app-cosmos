import React from 'react';
import { Link } from 'react-router-dom';
import './crew.css';

export const Crew = (props) => {
	return (
		<div className='crew-main'>
			<div className='crew'>
				<div className='crew-txts'>
					<p className='crew-txt'>02 Meet your crew</p>
					<p className='crew-head'>{props.head}</p>
					<p className='crew-head2'>{props.head2}</p>
					<p className='crew-txt2'>{props.txt}</p>
				</div>
				<img className='crew-img' src={props.img} alt='crew img' />
			</div>
			<div className='crew__links-box'>
				<Link className='crew-link' to='/crew/'>
					Commander
				</Link>
				<Link className='crew-link' to='/crew/specialist'>
					Mission Specialist
				</Link>
				<Link className='crew-link' to='/crew/pilot'>
					PILOT
				</Link>
				<Link className='crew-link' to='/crew/engineer'>
					Flight Engineer
				</Link>
			</div>
		</div>
	);
};
