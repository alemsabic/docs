import { RendererLike } from '@connectv/html';
import { File } from 'rxline/fs';
import { Page, Meta, ContentNav, Fonts, ToC, GithubSearch$ } from '@codedoc/core/components';

import { config } from '../config';
import { Header } from './header';
import { Footer } from './footer';


export function content(_content: HTMLElement, toc: HTMLElement, renderer: RendererLike<any, any>, file: File<string>) {
  return (
    <Page title={config.page.title.extractor(_content, config, file)}
          favicon={config.page.favicon}
          meta={<Meta {...config.page.meta}/>}
          fonts={<Fonts {...config.page.fonts}/>}

          scripts={config.page.scripts}
          stylesheets={config.page.stylesheets}

          header={<Header {...config}/>}
          footer={<Footer {...config}/>}
          toc={
            <ToC search={
                  config.misc?.github ? 
                  <GithubSearch$
                    repo={config.misc.github.repo} 
                    user={config.misc.github.user}
                    root={config.src.base}
                    pick={config.src.pick.source}
                    drop={config.src.drop.source}
                  /> : false
            }>{toc}</ToC>
          }>
<style>
{`



h1 {
  line-height:1.3;
  font-size: 2.5em;
  margin-top: 3em;
  letter-spacing: 2px;
}

h2, h3 {
  line-height:1.3;
  margin-top: 2.5em;
}

#-codedoc-container p {
  line-height:1.7;
}

@media only screen and (min-width: 768px) {
  body, input, button {
    font-size:20px;
}
}

body::before {
  content: "";
  position: fixed;
  top: -10px;
  left: 0;
  width: 100%;
  height: 10px;
  box-shadow: 0px 0 10px rgba(0, 0, 0, 0.8);
  z-index: 100;
}

.content-0-0-8 { 
  /* this will hide the scrollbar in mozilla based browsers */
  overflow: -moz-scrollbars-none;
  /* this will hide the scrollbar in internet explorers */
  -ms-overflow-style: none;
  }
  .content-0-0-8::-webkit-scrollbar { 
    width: 0 !important;
    display: none; 
  }

body.dark { 
font-weight: 300;
}


`}
</style>

      {_content}
      <ContentNav content={_content}/>
    </Page>
  )
}
