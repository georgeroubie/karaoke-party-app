import baseTheme from './base';

const DARK_THEME_KEY = 'dark';

const darkTheme = {
  ...baseTheme,
  colors: {
    backgroundPrimary: '#0C2D48',
    backgroundSecondary: '#145DA0',
    borderPrimary: '#B1D4E0',
    borderSecondary: '#2E8BC0',
    textPrimary: '#ffffff',
    buttonBackgroundPrimary: '#145DA0',
    buttonTextPrimary: '#ffffff',
    buttonBackgroundSecondary: '#186fc0',
    successBackgroundPrimary: '#189AB4',
    warningBackgroundPrimary: '#d8881c',
    warningTextPrimary: '#ffffff',
    dangerBackgroundPrimary: '#D8581C',
    dangerTextPrimary: '#ffffff',
    dangerBackgroundSecondary: '#e3672d',
  },
};

export { darkTheme, DARK_THEME_KEY };
