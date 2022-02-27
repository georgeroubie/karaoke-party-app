import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { saveItem } from '../helpers/data';

const Wrapper = styled.div`
	margin: 20px auto;
	display: flex;
	flex-direction: column;
`;

const Input = styled.input`
	border: 2px solid #000;
	outline: 0;
	border-radius: 0;
	padding: 10px 20px;
`;

const SongInput = styled(Input)`
	border-top-width: 0;
`;

const ButtonContainer = styled.div`
	display: flex;
`;

const Button = styled.button`
	width: 50%;
	border: 2px solid #000;
	border-top-width: 0;
	padding: 4px 20px;

	&:last-child {
		border-left-width: 0;
	}
`;

const Form = ({ item, onComplete }) => {
	const [name, setName] = useState(item.name);
	const [song, setSong] = useState(item.song);

	const save = () => {
		if (!name || !song) {
			alert('Name and song url is required');
			return;
		}
		saveItem(item.id, name, song);
		onComplete();
	};

	return (
		<Wrapper>
			<Input type="text" placeholder="Name" value={name} onChange={({ target }) => setName(target.value)} />
			<SongInput
				type="text"
				className="song"
				placeholder="Song URL"
				value={song}
				onChange={({ target }) => setSong(target.value)}
			/>
			<ButtonContainer>
				<Button onClick={onComplete}>Cancel</Button>
				<Button onClick={save}>Save</Button>
			</ButtonContainer>
		</Wrapper>
	);
};

Form.propTypes = {
	item: PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		song: PropTypes.string,
	}),
	onComplete: PropTypes.func.isRequired,
};

Form.defaultProps = {
	item: {
		id: -1,
		name: '',
		song: '',
	},
};

export default Form;
