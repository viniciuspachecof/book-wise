import { styled } from '@stitches/react';

export const Overlay = styled('div', {
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  zIndex: 999,
});

export const Container = styled('div', {
  width: '41.25rem',
  height: '100vh',
  backgroundColor: '$gray800',
  position: 'fixed',
  top: 0,
  right: 0,
  // transition: 'transform 0.3s ease-in-out',
  zIndex: 1000,
  padding: '3rem',
  overflow: 'auto',

  'div.close': {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '1rem',

    button: {
      backgroundColor: 'transparent',
      border: 0,
      cursor: 'pointer',
      display: 'flex',

      svg: {
        color: '$white',
      },
    },
  },
});

export const ContainerLivro = styled('div', {
  backgroundColor: '$gray700',
  padding: '1.5rem',
  borderRadius: '8px',

  '.container-livro': {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1.25rem',
    marginBottom: '2.5rem',

    '.container-livro-info': {
      display: 'flex',
      flexDirection: 'Column',
      minHeight: '15.125rem',
      justifyContent: 'space-between',

      '.titulo-livro': {
        fontSize: '$lg',
        color: '$gray100',
        fontWeight: 'bold',
        marginBottom: '0.5rem',
      },

      '.autor-livro': {
        fontSize: '$md',
        color: '$gray300',
      },

      '.qtd-avaliacao': {
        fontSize: '$sm',
        color: '$gray400',
      },
    },
  },

  '.container-info-principal': {
    display: 'flex',
    alignItems: 'center',
    gap: '3.5rem',
    padding: '1.5rem 0',
    borderTop: '1px solid $gray600',

    '.container-info': {
      display: 'flex',
      gap: '1rem',
      alignItems: 'center',

      svg: {
        color: '$green100',
      },

      span: {
        color: '$gray300',
        fontSize: '$sm',
      },

      p: {
        color: '$gray200',
        fontSize: '$md',
        fontWeight: 'bold',
      },
    },
  },
});

export const ContainerAvaliacaoUsuario = styled('div', {
  marginTop: '2.5rem',

  '.avaliar': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem',

    span: {
      fontSize: '$sm',
      color: '$gray200',
    },

    button: {
      all: 'unset',
      color: '$purple100',
      fontSize: '$md',
      fontWeight: 'bold',
      backgroundColor: 'transparent',
      cursor: 'pointer',

      '&:hover': {
        opacity: '0.8',
      },
    },
  },

  '.container-avaliacoes': {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
});
