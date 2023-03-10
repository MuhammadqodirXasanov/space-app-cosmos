import { Route, Routes } from 'react-router-dom';
import { Crew, Destination, Home, Technology } from './pages';
import { Layout } from './layout/layout';
import './pages/responsive.css'
import {
	moon,
	mars,
	europa,
	titan,
	moonMan,
	moonRaketa,
	marsRaketa,
	europaRaketa,
	marsMan,
	europaMan,
	titanWomen,
} from './assets';

export function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='technology'>
						<Route
							index
							element={
								<Technology
									head='LAUNCH VEHICLE'
									txt="A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
									img={moonRaketa}
								/>
							}
						/>
						<Route
							path='technomars'
							element={
								<Technology
									head='SPACEPORT'
									txt='A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.'
									img={marsRaketa}
								/>
							}
						/>
						<Route
							path='technoeuropa'
							element={
								<Technology
									head='SPACE CAPSULE'
									txt="A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
									img={europaRaketa}
								/>
							}
						/>
					</Route>
					<Route path='crew'>
						<Route
							index
							element={
								<Crew
									head='Commander'
									head2='Douglas Hurley'
									txt='Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.'
									img={moonMan}
								/>
							}
						/>
						<Route
							path='specialist'
							element={
								<Crew
									head='Mission Specialist'
									head2='MARK SHUTTLEWORTH'
									txt='Mark Richard Shuttleworth is the founder and CEO of Canonical, the
										company behind the Linux-based Ubuntu operating system.
										Shuttleworth became the first South African to travel to space as
										a space tourist.'
									img={marsMan}
								/>
							}
						/>
						<Route
							path='pilot'
							element={
								<Crew
									head='PILOT'
									head2='Victor Glover'
									txt='Pilot on the first operational flight of the SpaceX Crew Dragon to
									the International Space Station. Glover is a commander in the U.S.
									Navy where he pilots an F/A-18.He was a crew member of Expedition
									64, and served as a station systems flight engineer.'
									img={europaMan}
								/>
							}
						/>
						<Route
							path='engineer'
							element={
								<Crew
									head='Flight Engineer'
									head2='Anousheh Ansari'
									txt='Anousheh Ansari is an Iranian American engineer and co-founder of
									Prodea Systems. Ansari was the fourth self-funded space tourist,
									the first self-funded woman to fly to the ISS, and the first
									Iranian in space.'
									img={titanWomen}
								/>
							}
						/>
					</Route>

					<Route path='destination'>
						<Route
							index
							element={
								<Destination
									image={moon}
									head={'MOON'}
									descrip='See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.'
									distVal='384,400 km'
									timeVal='3 days'
								/>
							}
						/>
						<Route
							path='/destination/destimars'
							element={
								<Destination
									image={mars}
									head='MARS'
									descrip='Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!'
									distVal='225 MIL. km'
									timeVal='9 months'
								/>
							}
						/>
						<Route
							path='/destination/destieuropa'
							element={
								<Destination
									image={europa}
									head={'EUROPA'}
									descrip='The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.'
									distVal='628 MIL. km'
									timeVal='3 years'
								/>
							}
						/>
						<Route
							path='/destination/destititan'
							element={
								<Destination
									image={titan}
									head={'TITAN'}
									descrip='The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.'
									distVal='1.6 BIL. km'
									timeVal='7 years'
								/>
							}
						/>
					</Route>
				</Route>
				<Route path='*' element={<h1>Page is not found</h1>} />
			</Routes>
		</div>
	);
}
