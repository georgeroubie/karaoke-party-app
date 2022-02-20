import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Form from './Form';
import List from './List';
import Navigation from './Navigation';

const Players = ({ hidePlayers }) => {
	const [showAdd, setShowAdd] = useState(false);
	const items = [
		{ icon: 'arrow_back', text: 'BACK', onClick: hidePlayers },
		{ icon: 'group_add', text: 'ADD NEW', onClick: () => setShowAdd(true) },
	];

	return (
		<Fragment>
			<Navigation items={items} />
			{showAdd ? <Form onComplete={() => setShowAdd(false)} /> : <List />}
		</Fragment>
	);
};

Players.propTypes = {
	hidePlayers: PropTypes.func.isRequired,
};

export default Players;
