import React from 'react';
import { Link } from 'react-router-dom';
import '../stylings/home.css';

const Home = () => {
	return (
		<div id="home-content">
			<h2>Design your own garden. Eat healthier. Save money.</h2>
			<div id="logo-btns">
				<div id="plant-icon">
					<svg width="260" height="260">
						<circle r="125" cx="130" cy="130" fill="white" stroke="darkgreen" stroke-width="5px" />
					</svg>
				</div>
				<div id="home-btns">
					<button>Get Registered</button>
					<p>OR</p>
					<Link to="/plan">
						<button>Make Some Gardens!</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Home;
