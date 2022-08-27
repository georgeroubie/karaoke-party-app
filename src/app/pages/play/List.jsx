import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import _Button from '../../components/form-elements/Button';
import { AppContext } from '../../state/Context';
import { resetList, textTruncate } from '../../theme/styles/helpers';

const ListItems = styled.ul`
  ${resetList}
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: ${({ theme: { spacing } }) => spacing.small};

  @media (min-width: ${({ theme: { screens } }) => screens.medium}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Actions = styled.div`
  display: flex;
  width: 40px;
  flex-shrink: 0;
`;

const Button = styled(_Button)`
  margin: ${({ theme: { spacing } }) => spacing.large} auto 0;
  width: 150px;
  display: flex;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${Button} {
    width: 40px;
    margin: 0;
  }
`;

const Link = styled.a`
  ${textTruncate}
  font-weight: 500;
  width: 100%;
  height: 40px;
  line-height: 40px;
  border: ${({ theme: { border, colors } }) => `${border.size} solid ${colors.borderPrimary}`};
  border-right: 0;
  padding: 0 ${({ theme: { spacing } }) => spacing.small};
  text-decoration: none;
`;

const List = () => {
  const { state, deletePlayer } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <>
      <ListItems>
        {state.playersList.map(({ id, name, song }) => (
          <Item key={id}>
            <Link href={song} target="_blank" rel="noreferrer">
              {name}
            </Link>
            <Actions>
              <Button size="small" type="danger" icon="delete" onClick={() => deletePlayer(id)} />
            </Actions>
          </Item>
        ))}
      </ListItems>
      {state.playersList.length > 1 && <Button text="PLAY" onClick={() => navigate('/sing')} size="small" />}
    </>
  );
};

export default List;
