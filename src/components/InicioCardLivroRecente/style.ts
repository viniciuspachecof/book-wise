import { styled } from '@stitches/react';

export const Container = styled('div', {
  backgroundColor: '$gray700',
  padding: '1.5rem',
  borderRadius: '8px',
  marginBottom: '0.75rem',
  cursor: 'pointer',
  border: '2px solid transparent',

  transition: 'border 0.1s',

  '&:hover': {
    border: '2px solid $gray600',
  },

  '.container-avaliacao': {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '2rem',
    gap: '1rem',

    '.avatar': {
      '&:hover ~ div .nome-usuario': {
        textDecoration: 'underline',
      },
    },

    '.nome-usuario': {
      fontSize: '$md',
      color: '$gray100',
      textDecoration: 'none',

      '&:hover': {
        textDecoration: 'underline',
      },
    },

    '.data-usuario': {
      fontSize: '$sm',
      color: '$gray400',
    },
  },

  '.container-livro': {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1.25rem',

    '.titulo-livro': {
      fontSize: '$md',
      color: '$gray100',
      fontWeight: 'bold',
    },

    '.autor-livro': {
      fontSize: '$sm',
      color: '$gray400',
    },

    '.descricao-livro': {
      fontSize: '$sm',
      color: '$gray300',
      marginTop: '1.25rem',
      overflow: 'hidden',
      display: '-webkit-box',
      '-webkit-line-clamp': 4 /* número de linhas */,
      '-webkit-box-orient': 'vertical',
    },
  },
});
