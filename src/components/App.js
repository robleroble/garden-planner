import React from 'react';
import Routes from './Routes';
import NavBar from './NavBar';
import GardenFooter from './GardenFooter'
import '../stylings/App.css';

function App() {
	return (
		<div>
			<NavBar />
			<div id="app-theme">
				<Routes />
			</div>
			<GardenFooter />
		</div>
	);
}

export default App;
