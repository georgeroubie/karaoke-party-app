import { getSavedTheme } from '../../helpers/storage';
import { DARK_THEME_KEY } from './dark';
import { LIGHT_THEME_KEY } from './light';

const getCurrentTheme = () => {
  const savedTheme = getSavedTheme();
  if (savedTheme) {
    return savedTheme;
  } else if (window.matchMedia) {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return DARK_THEME_KEY;
    } else {
      return LIGHT_THEME_KEY;
    }
  }
  return DARK_THEME_KEY;
};

export { getCurrentTheme };
