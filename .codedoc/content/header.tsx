import { CodedocConfig } from '@codedoc/core';
import { Header as _Header, GithubButton } from '@codedoc/core/components';


export function Header(config: CodedocConfig, renderer: any) {
  return (
    <_Header>{config.misc?.github ?
      <fragment>
        <GithubButton action={config.misc.github.action || 'Star'}
          repo="codedoc"
          user={config.misc.github.user}
          large={config.misc.github.large === true}
          count={config.misc.github.count !== false}
          colorLight={'Dark'}
          colorDark={'Dark'}
          standardIcon={config.misc.github.standardIcon !== false}/>
        <br/><br/>
      </fragment>
      : ''}
      <style>{`
        .header-copyright-notice {
          font-size: 10px;
          display: block;
          opacity: .25;
          transition: opacity .3s !important;
          text-decoration: none !important;
        }

        .header-copyright-notice img {
          width: 32px;
        }

        .header-copyright-notice:hover {
          opacity: 1;
        }

        @media screen and (max-width: 800px) {
          .header-copyright-notice {
            display: none;
          }
        }
      `}</style>
      <a href="https://twitter.com/Sarajevo" target="_blank" class="header-copyright-notice">
        Twitter<br/>
        @Sarajevo<br/>
      </a>
    </_Header>
  )
}
