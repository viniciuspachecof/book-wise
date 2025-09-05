import { styled } from '@stitches/react';

export const Container = styled('div', {
  margin: '4.5rem 6rem 0',

  '.titulo-pagina': {
    display: 'flex',
    gap: '0.75rem',
    alignItems: 'center',
    marginBottom: '2.5rem',

    svg: {
      color: '$green100',
    },

    h1: {
      color: '$gray100',
      fontSize: '$xl-2',
    },
  },

  '.container-principal': {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '4rem',

    '.container-primario': {
      '.container-ultima-leitura': {
        marginBottom: '2.5rem',
      },
    },
  },

  '.titulo-container': {
    color: '$gray100',
    fontSize: '$sm',
    marginBottom: '1rem',
  },
});
