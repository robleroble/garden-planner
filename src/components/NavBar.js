import React from 'react';
import '../stylings/NavBar.css';

const NavBar = () => {
	return (
		<div id="nav-bar">
			<nav>
				<ul>
					<li id="navbar-title">
						<a href="#">Garden Planner</a>
					</li>
					<div id="nav-items">
						<li className="navbar-item">
							<a href="#">About</a>
						</li>
						<li className="navbar-item">
							<a href="#">Login</a>
						</li>
					</div>
				</ul>
			</nav>
		</div>
	);
};

export default NavBar;
