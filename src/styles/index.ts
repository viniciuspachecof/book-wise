import { createStitches } from '@stitches/react';

export const { config, styled, css, globalCss, keyframes, getCssText, theme, createTheme } = createStitches({
  theme: {
    colors: {
      white: '#fff',

      green100: '#50B2C0',
      green200: '#255D6A',
      green300: '#0A313C',

      purple100: '#8381D9',
      purple200: '#2A2879',

      gray100: '#F8F9FC',
      gray200: '#E6E8F2',
      gray300: '#D1D6E4',
      gray400: '#8D95AF',
      gray500: '#303F73',
      gray600: '#252D4A',
      gray700: '#181C2A',
      gray800: '#0E1116',
    },

    fontSizes: {
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      'xl-2': '1.5rem',
    },
  },
});
