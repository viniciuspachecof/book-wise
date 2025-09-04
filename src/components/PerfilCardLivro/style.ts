import { styled } from '@stitches/react';

export const Container = styled('div', {
  backgroundColor: '$gray700',
  padding: '1.5rem',
  borderRadius: '8px',

  '.container-livro': {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1.25rem',

    '.container-livro-info': {
      display: 'flex',
      flexDirection: 'Column',

      '.titulo-livro': {
        fontSize: '$md',
        color: '$gray100',
        fontWeight: 'bold',
      },

      '.autor-livro': {
        fontSize: '$sm',
        color: '$gray400',
        marginBottom: '5.4375rem',
      },
    },
  },

  '.descricao-livro': {
    fontSize: '$sm',
    color: '$gray300',
    marginTop: '1.5rem',
  },
});
