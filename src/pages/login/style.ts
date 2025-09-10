import { styled } from '@stitches/react';
import bg from '@/assets/background-book-wise.svg';

export const Container = styled('div', {
  display: 'flex',
  width: '100%',
  height: '100vh',
  padding: '1.25rem',

  '.background': {
    flex: 1,
    backgroundImage: `url(${bg.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',

    '.cor-fundo': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      backgroundColor: 'rgba(42, 40, 121, 0.8)',
    },
  },

  '.login-acesso': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,

    '>div': {
      maxWidth: '23.25rem',
      width: '100%',
    },

    p: {
      fontSize: '$xl-2',
      fontWeight: 'bold',
      color: '$gray100',
      marginBottom: '0.3125rem',
    },

    span: {
      fontSize: '$md',
      color: '$gray200',
    },

    '.container-links': {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      marginTop: '2.5rem',

      '.link': {
        all: 'unset',
        padding: '1.25rem',
        display: 'flex',
        alignItems: 'center',
        gap: '1.25rem',
        backgroundColor: '$gray600',
        cursor: 'pointer',
        color: '$gray200',
        fontSize: '$lg',
        borderRadius: '0.5rem',

        transition: 'background-color 0.1s',

        '&:hover': {
          backgroundColor: '$gray500',
        },
      },
    },
  },
});
