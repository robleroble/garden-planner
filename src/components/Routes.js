import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import GardenPlan from './GardenPlan';

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/">
				<Home />
			</Route>
			<Route exact path="/plan">
				<GardenPlan />
			</Route>
			<Redirect to="/" />
		</Switch>
	);
};

export default Routes;
