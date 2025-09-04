import { styled } from '@stitches/react';

export const Container = styled('div', {
  backgroundColor: '$gray700',
  padding: '1.5rem',
  borderRadius: '8px',

  '.container-livro': {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1.25rem',

    '.container-avaliacao': {
      display: 'flex',
      justifyContent: 'space-between',

      '.data-pub': {
        fontSize: '$md',
        color: '$gray300',
      },
    },

    '.titulo-livro': {
      fontSize: '$md',
      color: '$gray100',
      fontWeight: 'bold',
      marginTop: '0.75rem',
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
      '-webkit-line-clamp': 2 /* número de linhas */,
      '-webkit-box-orient': 'vertical',
    },
  },
});
