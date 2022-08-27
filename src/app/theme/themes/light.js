import baseTheme from './base';

const LIGHT_THEME_KEY = 'light';

const lightTheme = {
  ...baseTheme,
  colors: {
    backgroundPrimary: '#D9E4EC',
    backgroundSecondary: '#B7CFDC',
    borderPrimary: '#6AABD2',
    borderSecondary: '#B7CFDC',
    textPrimary: '#333333',
    buttonBackgroundPrimary: '#B7CFDC',
    buttonTextPrimary: '#333333',
    buttonBackgroundSecondary: '#6AABD2',
    successBackgroundPrimary: '#75E6DA',
    warningBackgroundPrimary: '#E08955',
    warningTextPrimary: '#ffffff',
    dangerBackgroundPrimary: '#e33401',
    dangerTextPrimary: '#ffffff',
    dangerBackgroundSecondary: '#c92e00',
  },
};

export { lightTheme, LIGHT_THEME_KEY };
