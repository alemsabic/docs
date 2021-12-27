
import { configuration,
        DefaultMarkdownCustomComponents,
} from '@codedoc/core';

import { theme } from './theme';
import { Utterances } from './components/utterances';
import { Card } from './components/card';
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
  },
  misc: {
    github: {
      user: 'alemsabic',
      repo: 'codedoc-docs',
      action: 'Issue',            
      count: true,                
      standardIcon: true,
    },
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