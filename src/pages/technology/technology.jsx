import React from 'react';
import { Link } from 'react-router-dom';
import './technology.css';

export const Technology = (props) => {

	return (
		<div className='techno'>
			<div className='tech-txts'>
				<p className='tech-txt'>03 SPACE LAUNCH 101</p>
				<div className='tech-txtsmain'>
					<div className='tech-nums'>
						<Link to='/technology/' className='tech-num'>
							1
						</Link>
						<Link to='/technology/technomars' className='tech-num'>
							2
						</Link>
						<Link to='/technology/technoeuropa' className='tech-num'>
							3
						</Link>
					</div>
					<div className='tech-txtbox'>
						<p className='tech-txt1'>THE TERMINOLOGY…</p>
						<p className='tech-head'>{props.head}</p>
						<p className='tech-txt2'>{props.txt}</p>
					</div>
				</div>
			</div>
			<img className='tech-img' src={props.img} alt='techno img' />
		</div>
	);
};
