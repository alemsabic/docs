import { createTheme } from '@codedoc/core/transport';


export const theme = /*#__PURE__*/createTheme({
  light: {
    background: 'rgba(255,255,255)',       // --> CSS color string, background of the page
    primary: 'rgba(0,0,0,0.85)',            // --> CSS color string, primary color (for buttons, links, etc)
    primaryContrast: 'rgba(255,255,255,0.85)',
    border: 'rgba(0,0,0,0.1)',            // --> CSS color string, border colors
  },

  dark: {
    background: 'rgba(24,24,24)',          // --> CSS color string, background of the page
    primary: 'rgba(255,255,255,0.85)',
    border: 'rgba(255,255,255,0.1)',            // --> CSS color string, border colors
  },

  toc: {    

    light: {
      background: 'rgba(246,248,250,0.75)',              // --> CSS color string, background of ToC
      border: 'rgba(0,0,0,0.05)',                 // --> CSS color string, border of ToC
    },

    dark: {
      background: 'rgba(32,32,32,0.75)',             // --> CSS color string, background of ToC
      border: 'rgba(255,255,255,0.05)',                // --> CSS color string, border of ToC
    },             
  },

  code: {
    wmbar: false
  }
});
