import { styled } from '@/styles';

export const Container = styled('div', {
  height: '100vh',
  padding: '1.25rem 0 1.25rem 1.25rem',
});

export const ContainerSideBar = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100%',
  padding: '1.5rem 2.938rem',
  background: 'linear-gradient(180deg,rgba(25, 34, 65, 1) 0%, rgba(18, 28, 35, 1) 100%)',
  borderRadius: '12px',

  '>img': {
    marginBottom: '4rem',
  },

  '.menu': {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    gap: '1.5rem',

    a: {
      color: '$gray400',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      padding: '0 1rem',
      borderLeft: '3px solid transparent',

      transition: 'color 0.1s',
    },

    'a.active': {
      color: '$white',
      borderLeft: '3px solid #ffffff',
      borderImage: 'linear-gradient(to bottom, #7fd1cc, #9694f5) 1',
    },

    'a:hover': {
      color: '$white',
    },
  },
});

export const ContainerUser = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  height: 32,

  button: {
    all: 'unset',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',

    transition: 'opacity 0.1s',

    '&:hover': {
      opacity: '0.8',
    },
  },

  variants: {
    logado: {
      true: {
        svg: {
          color: '#F75A68',
        },
      },
      false: {
        svg: {
          color: '$green100',
        },
      },
    },
  },
});
