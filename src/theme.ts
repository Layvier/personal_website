import { extendTheme } from '@chakra-ui/react';
import '@fontsource/spartan/400.css';
import '@fontsource/spartan/600.css';
import '@fontsource/spartan/800.css';
import '@fontsource/raleway/600.css';
import '@fontsource/raleway/800.css';

export const fonts = {
  bebasNeue: 'Bebas Neue',
  spartan: 'Spartan',
  raleway: 'Raleway',
};

export const theme = extendTheme({
  colors: {
    gray: {
      50: '#FFFFFF',
      100: '#F1F1F1',
      150: '#E3E3E3',
      200: '#D5D5D5',
      250: '#C6C6C6',
      300: '#B8B8B8',
      350: '#AAAAAA',
      400: '#9C9C9C',
      450: '#8E8E8E',
      500: '#808080',
      550: '#717171',
      600: '#636363',
      650: '#555555',
      700: '#474747',
      750: '#393939',
      800: '#2B2B2B',
      850: '#1C1C1C',
      900: '#0E0E0E',
      950: '#000000',
    },
    // black: '#000000ff',
    onyx: '#363946ff',
    'dim-gray': '#696773ff',
    'sonic-silver': '#777580ff',
    almond: '#dac6b5ff',
    'baby-blue-eyes': '#a4bef3ff',
    opal: '#92b6b1ff',
  },
  fonts: {
    heading: fonts.spartan,
    body: fonts.raleway,
  },
});
