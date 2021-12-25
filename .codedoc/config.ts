
import { configuration,
        DefaultMarkdownCustomComponents,
        DefaultMarkdownCustomInlineComponents,
        Build,
        CodedocConfig,
} from '@codedoc/core';
import { formulaPlugin } from '@codedoc/core/components';

import { theme } from './theme';
import { Card } from './components/card';
import { Tag } from './components/tag';


export const config = /*#__PURE__*/configuration({
  theme,
  dest: {
    html: 'dist',
    assets: 'dist',
    bundle: 'assets',               // --> where to store codedoc's bundle (relative to `assets`)
    styles: 'assets',               // --> where to store codedoc's styles (relative to `assets`)
  },
  page: {
    title: {
      base: '',
    },
    favicon: '/favicon.ico',
    meta: {
      subject: 'Beautiful and Modern Software Documentation',
      description: 'An open-source tool to help you easily create best-in-class software documentation for your projects',
      keywords: [
        'documentation',
        'docs',
        'software',
        'code',
        'open-source',
        'open source',
        'codedoc',
        'document',
        'elegant',
        'beautiful',
        'modern',
      ]
    }
  },
  misc: {
    github: {
      user: 'alemsabic',
      repo: 'codedoc-docs',
    },
    gitter: {
      room: 'connectv/codedoc'
    }
  },
  plugins: [formulaPlugin],
  markdown: {
    customComponents: {
      ...DefaultMarkdownCustomComponents,
      Card,
    },
    customInlineComponents: {
      ...DefaultMarkdownCustomInlineComponents,
      Tag,
    }
  }
});