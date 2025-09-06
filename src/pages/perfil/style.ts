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
      input: {
        marginBottom: '2rem',
        width: '100%',
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

    '.container-secundario': {
      '.container-perfil': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

        img: {
          marginBottom: '1.25rem',
        },

        p: {
          color: '$gray100',
          fontSize: '$xl',
          fontWeight: 'bold',
        },

        span: {
          color: '$gray400',
          fontSize: '$sm',
        },
      },

      '.divisao::before': {
        content: '',
        display: 'block',
        margin: '3rem auto',
        width: '2rem',
        height: '0.25rem',
        background: 'linear-gradient(#7fd1cc, #9694f5)',
        borderRadius: '100px',
      },

      '.container-info-principal': {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '2.5rem',

        '.container-info': {
          display: 'flex',
          gap: '1.25rem',
          alignItems: 'center',

          svg: {
            color: '$green100',
          },

          p: {
            color: '$gray200',
            fontSize: '$md',
            fontWeight: 'bold',
          },

          span: {
            color: '$gray300',
            fontSize: '$sm',
          },
        },
      },
    },
  },
});
