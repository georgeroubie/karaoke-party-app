import React, { useState } from 'react';
import styled from 'styled-components';
import Players from './components/Players';
import Shuffle from './components/Shuffle';
import Navigation from './components/Navigation';

const Wrapper = styled.div`
	max-width: 320px;
	margin: 0 auto;
	padding: 0 10px;
`;

const Title = styled.h1`
	font-family: 'Press Start 2P', cursive;
	font-size: 3rem;
	line-height: 3.5rem;
	text-align: center;
	user-select: none;
	margin: 30px auto 60px;
`;

const App = () => {
	const [show, setShow] = useState(null);
	const items = [
		{ icon: 'videogame_asset', text: 'PLAY', onClick: () => setShow('shuffle') },
		{ icon: 'people', text: 'PLAYERS', onClick: () => setShow('players') },
	];

	return (
		<Wrapper>
			<Title onClick={() => window.location.reload()}>Karaoke Party</Title>
			{show !== 'players' && <Navigation items={items} />}
			{show === 'players' && <Players hidePlayers={() => setShow(null)} />}
			{show === 'shuffle' && <Shuffle />}
		</Wrapper>
	);
};

export default App;
