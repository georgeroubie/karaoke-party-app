import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Players from '../pages/Players';
import AddPlayer from '../pages/AddPlayer';
import Play from '../pages/Play';

const Routing = () => {
	return (
		<Routes>
			<Route path="/karaoke-party-app" element={<Play />} />
			<Route path="/karaoke-party-app/" element={<Play />} />
			<Route path="/karaoke-party-app/players" element={<Players />} />
			<Route path="/karaoke-party-app/add-player" element={<AddPlayer />} />
		</Routes>
	);
};

export default Routing;