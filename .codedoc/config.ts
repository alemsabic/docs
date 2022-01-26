
import { configuration,
        DefaultMarkdownCustomComponents,
} from '@codedoc/core';

import { theme } from './theme';
import { Card } from './components/card';
import { Utterances } from './components/utterances';
import { codingBlog } from '@codedoc/coding-blog-plugin';  // --> import the plugin


export const config = /*#__PURE__*/configuration({
  theme,
  dest: {
    html: 'dist',
    assets: 'dist',
  },
  page: {
    title: {
      base: 'Alem Šabić',
    },
    favicon: '/favicon.ico',
    meta: {
      subject: 'Darum gehts.',
      description: 'Hier gehts um viele Dinge.',
      keywords: [
        'das',
        'dies',
        'das',
        'dies',
        'und das',
        'und dies',
      ],
      themeColor: '#222',             
      appleMobileWebStatusBarStyle: 'black-translucent',
    },
    fonts: {                             // --> font settings
      text: {                            // --> font used for texts
        url:                             // --> URL of font used for texts
          'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap',
        name: 'Inter',                    // --> name of font used for texts
        fallback: 
        `sans-serif`           // --> the fallback font for texts
      },
    }, 
  },
  misc: {
    
  },
  plugins: [codingBlog()],
  markdown: {
    customComponents: {
      ...DefaultMarkdownCustomComponents,
      Card,
      Utterances,

    }
  }
});