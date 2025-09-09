import { styled } from '@stitches/react';

export const Container = styled('div', {
  margin: '4.5rem 6rem 0',
  flex: 1,

  '.container-busca': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '2.5rem',

    '.titulo-pagina': {
      display: 'flex',
      gap: '0.75rem',
      alignItems: 'center',
      flex: 2,

      svg: {
        color: '$green100',
      },

      h1: {
        color: '$gray100',
        fontSize: '$xl-2',
      },
    },

    input: {
      flex: 1,
      padding: '0.875rem 1.25rem',
      border: '1px solid',
      borderRadius: '0.25rem',
      borderColor: '$gray500',
      backgroundColor: 'transparent',
      color: '$gray200',
      fontSize: '$sm',

      '&::placeholder': {
        color: '$gray400',
      },

      '&:focus': {
        borderColor: '$green200',
        outline: 'none',
      },
    },
  },

  '.container-categorias': {
    display: 'flex',
    gap: '0.75rem',
    justifyContent: 'flex-start',
    marginBottom: '3rem',

    button: {
      all: 'unset',
      cursor: 'pointer',
      backgroundColor: 'transparent',
      border: '1px solid $purple100',
      borderRadius: '100px',
      color: '$purple100',
      fontSize: '$md',
      padding: '0.25rem 1rem',

      transition: 'background-color,color 0.1s',

      '&:hover': {
        backgroundColor: '$purple200',
        border: '1px solid $purple200',
        color: '$white',
      },
    },
  },

  '.container-livros': {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1.25rem',
  },
});
