import React, { useState } from 'react';
import styled from 'styled-components';
import { deleteItem, getItems } from '../helpers/data';
import Form from './Form';

const Wrapper = styled.div`
	margin: 20px auto;
	border: 2px solid #000;
`;

const Item = styled.div`
	display: flex;
	justify-content: space-between;
	border-bottom: 2px solid #000;

	&:last-child {
		border-bottom: 0;
	}
`;

const ItemTitle = styled.div`
	margin: 0;
	width: calc(100% - 100px);
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	padding: 10px;
	font-size: 1.2rem;
	font-weight: normal;
`;

const ItemButton = styled.button`
	border-left: 2px solid #000;
	padding: 0;
	text-align: center;
	width: 45px;

	&:last-child {
		width: 55px;
	}
`;

const List = () => {
	const [editItem, setEditItem] = useState(null);
	const [players, setPlayers] = useState(getItems());

	const editPlayer = (id) => {
		const item = players.find((player) => player.id === id);
		setEditItem(item);
	};

	const deletePlayer = (id) => {
		deleteItem(id);
		setPlayers(getItems());
	};

	const saveIsCompleted = () => {
		setPlayers(getItems());
		setEditItem(null);
	};

	if (!editItem && !players.length) return null;

	return editItem ? (
		<Form item={editItem} onComplete={saveIsCompleted} />
	) : (
		<Wrapper>
			{players.map(({ id, name }) => (
				<Item key={id}>
					<ItemTitle>{name}</ItemTitle>
					<ItemButton onClick={() => editPlayer(id)}>Edit</ItemButton>
					<ItemButton onClick={() => deletePlayer(id)}>Delete</ItemButton>
				</Item>
			))}
		</Wrapper>
	);
};

export default List;
