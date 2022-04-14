import { useEffect, useReducer } from 'react';
import { getSavedPlayersList, savePlayersList, saveThemeSelection } from '../helpers/storage';
import { getCurrentTheme } from '../theme/themes/helpers';
import * as actionTypes from './actions';
import { appReducer } from './reducer';

const useAppState = () => {
  const [state, dispatch] = useReducer(appReducer, {
    theme: getCurrentTheme(),
    playersList: getSavedPlayersList(),
  });

  const setState = (type, value) => {
    dispatch({ type, value });
  };

  const setTheme = (value) => {
    saveThemeSelection(value);
    setState(actionTypes.UPDATE_THEME_SELECTION, value);
  };

  const addPlayer = (player) => {
    setState(actionTypes.ADD_PLAYER, player);
  };

  const deletePlayer = (id) => {
    setState(actionTypes.DELETE_PLAYER, id);
  };

  const makePlayerActive = (id) => {
    setState(actionTypes.MAKE_PLAYER_ACTIVE, id);
  };

  // Sync state with local storage
  useEffect(() => {
    savePlayersList(state.playersList);
  }, [state.playersList]);

  return {
    state,
    setTheme,
    addPlayer,
    deletePlayer,
    makePlayerActive,
  };
};

export { useAppState };
