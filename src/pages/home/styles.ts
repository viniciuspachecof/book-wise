import { styled } from '@stitches/react';

export const Container = styled('div', {
  display: 'grid',
  gridTemplateColumns: '2fr 1fr',

  '.container-avaliacoes': {
    margin: '4.5rem 2rem 0 4.75rem',
  },

  '.container-populares-usuario': {
    margin: '9.125rem 6rem 0 2rem',
  },
});
