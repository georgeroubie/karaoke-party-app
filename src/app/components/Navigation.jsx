import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	border: 2px solid #000;
`;

const Item = styled.button`
	display: inline-flex;
	align-items: center;
	min-width: 50%;
	padding: 10px 20px;
	font-size: 1rem;

	&:first-child {
		border-right: 1px solid #000;
	}

	&:last-child {
		border-left: 1px solid #000;
	}
`;

const Icon = styled.span`
	font-size: 2rem;
	margin-right: 10px;
`;

const Navigation = ({ items }) => (
	<Container>
		{items.map(({ icon, text, onClick }) => {
			return (
				<Item onClick={onClick} key={icon}>
					<Icon className="material-icons">{icon}</Icon>
					{text}
				</Item>
			);
		})}
	</Container>
);

Navigation.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			icon: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired,
			onClick: PropTypes.func.isRequired,
		})
	).isRequired,
};

export default Navigation;
