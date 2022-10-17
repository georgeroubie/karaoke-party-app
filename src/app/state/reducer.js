import * as actionTypes from './actions';

function appReducer(state, { type, value }) {
  switch (type) {
    case actionTypes.UPDATE_THEME_SELECTION:
      return {
        ...state,
        theme: value,
      };
    case actionTypes.ADD_PLAYER:
      return {
        ...state,
        playersList: [...state.playersList, value],
      };
    case actionTypes.DELETE_PLAYER:
      return {
        ...state,
        playersList: state.playersList.filter((item) => item.id !== value),
      };
    case actionTypes.MAKE_PLAYER_ACTIVE:
      return {
        ...state,
        playersList: state.playersList.map((player) => ({ ...player, active: player.id === value })),
      };
    default:
      return state;
  }
}

export { appReducer };
