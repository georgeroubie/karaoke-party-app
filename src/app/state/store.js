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

  const addPlayer = (value) => {
    setState(actionTypes.ADD_PLAYER, value);
  };

  const deletePlayer = (value) => {
    setState(actionTypes.DELETE_PLAYER, value);
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
  };
};

export { useAppState };
