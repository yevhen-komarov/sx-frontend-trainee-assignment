import { Routes as ReactRoutes, Route } from 'react-router-dom';
import Home from './home';
import Story from './story';

const Routes = () => {
	return (
		<ReactRoutes>
			<Route path='/' element={<Home />} />
			<Route path='/:id' element={<Story />} />
		</ReactRoutes>
	);
};

export default Routes;
