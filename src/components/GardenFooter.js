import React from "react"
import "../stylings/GardenFooter.css"

const GardenFooter = () => {
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
    )
}

export default GardenFooter;