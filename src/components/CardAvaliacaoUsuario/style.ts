import { styled } from '@stitches/react';

export const Container = styled('div', {
  backgroundColor: '$gray700',
  padding: '1.5rem',
  borderRadius: '8px',

  '.container-avaliacao': {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '1.25rem',
    gap: '1rem',

    '.avatar': {
      img: {
        borderRadius: '100%',
      },

      '&:hover ~ div .nome-usuario': {
        textDecoration: 'underline',
      },
    },

    '.nome-usuario': {
      fontSize: '$md',
      fontWeight: 'bold',
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

  '.descricao-livro': {
    fontSize: '$sm',
    color: '$gray300',
    marginTop: '1.25rem',
    lineHeight: '160%',
    // overflow: 'hidden',
    // display: '-webkit-box',
    // '-webkit-line-clamp': 4 /* número de linhas */,
    // '-webkit-box-orient': 'vertical',
  },
});
