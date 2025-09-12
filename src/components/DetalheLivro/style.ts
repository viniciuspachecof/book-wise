import { styled } from '@stitches/react';

export const Overlay = styled('div', {
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  zIndex: 999,
  transition: 'transform 0.3s ease-in-out',

  variants: {
    open: {
      true: {
        transform: 'translateX(0%)',
        boxShadow: '-5px 0px 18px rgba(0, 0, 0, 0.75)',
      },
      false: {
        transform: 'translateX(100%)',
      },
    },
  },

  defaultVariants: {
    open: false,
  },
});

export const Container = styled('div', {
  width: '41.25rem',
  height: '100vh',
  backgroundColor: '$gray800',
  position: 'fixed',
  top: 0,
  right: 0,
  transition: 'transform 0.3s ease-in-out',
  zIndex: 1000,
  padding: '3rem',
  overflow: 'auto',

  variants: {
    open: {
      true: {
        transform: 'translateX(0%)',
        boxShadow: '-5px 0px 18px rgba(0, 0, 0, 0.75)',
      },
      false: {
        transform: 'translateX(100%)',
      },
    },
  },

  defaultVariants: {
    open: false,
  },

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

    '.container-avaliacao-usuario': {
      backgroundColor: '$gray700',
      padding: '1.5rem',
      borderRadius: '8px',

      'div:first-child': {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        marginBottom: '1.5rem',

        span: {
          marginLeft: 'auto',
        },
      },

      'div.container-textarea': {
        display: 'flex',
        marginBottom: '0.75rem',

        textarea: {
          all: 'unset',

          height: '8.5rem',
          backgroundColor: '$gray800',
          border: '1px solid',
          borderRadius: '0.25rem',
          borderColor: '$gray500',
          padding: '0.875rem 1.25rem',
          flex: 1,
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

      'div:last-child': {
        display: 'flex',
        gap: '0.5rem',
        justifyContent: 'flex-end',

        button: {
          all: 'unset',

          cursor: 'pointer',
          padding: '0.5rem',
          backgroundColor: '$gray600',
          display: 'flex',
          borderRadius: '0.25rem',

          transition: 'background-color 0.1s',

          '&:hover': {
            backgroundColor: '$gray500',
          },
        },
      },
    },
  },
});
