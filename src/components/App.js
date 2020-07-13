import React from 'react';
import Routes from './Routes';
import NavBar from './NavBar';
import '../stylings/App.css';

function App() {
	return (
		<div>
			<NavBar />
			<div>
				<Routes />
			</div>
		</div>
	);
}

export default App;
