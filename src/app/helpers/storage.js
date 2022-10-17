const SAVED_THEME_KEY = 'user_selected_theme';
const LOCAL_STORAGE_KEY = 'players_list';

function getSavedTheme() {
  localStorage.getItem(SAVED_THEME_KEY);
}

function saveThemeSelection(theme) {
  localStorage.setItem(SAVED_THEME_KEY, theme);
}

function getSavedPlayersList() {
  const list = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (list) {
    try {
      const result = JSON.parse(list);
      return result;
    } catch (ex) {
      return [];
    }
  }
  return [];
}

function savePlayersList(list) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(list));
}

function deleteAllData() {
  localStorage.removeItem(SAVED_THEME_KEY);
  localStorage.removeItem(LOCAL_STORAGE_KEY);
  window.location.href = '/';
}

export { getSavedTheme, saveThemeSelection, getSavedPlayersList, savePlayersList, deleteAllData };
