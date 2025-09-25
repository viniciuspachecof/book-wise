import { styled } from '@stitches/react';
import { relative } from 'path';

export const Overlay = styled('div', {
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  zIndex: 999,

  variants: {
    open: {
      true: {
        display: 'visible',
      },
      false: {
        visibility: 'hidden',
      },
    },
  },

  defaultVariants: {
    open: false,
  },
});

export const Container = styled('div', {
  position: 'fixed',
  display: 'flex',
  inset: 0,
  zIndex: 1000,

  variants: {
    open: {
      true: {
        visibility: 'visible',
      },
      false: {
        visibility: 'hidden',
      },
    },
  },

  defaultVariants: {
    open: false,
  },

  '.container-avaliacao': {
    position: 'relative',
    maxWidth: '32.25rem',
    width: '100%',
    margin: 'auto',
    padding: '3.5rem 4.5rem',
    backgroundColor: '$gray700',
    borderRadius: '0.75rem',

    p: {
      fontSize: '$md',
      color: 'gray200',
      marginBottom: '2.5rem',
      textAlign: 'center',
    },

    'div.close': {
      position: 'absolute',
      right: 0,
      top: 0,
      margin: '1rem',

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

    '.container-links': {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',

      button: {
        all: 'unset',
        padding: '1.25rem',
        display: 'flex',
        alignItems: 'center',
        gap: '1.25rem',
        backgroundColor: '$gray600',
        cursor: 'pointer',
        color: '$gray200',
        fontSize: '$lg',
        borderRadius: '0.5rem',

        transition: 'background-color 0.1s',

        '&:hover': {
          backgroundColor: '$gray500',
        },
      },
    },
  },
});
