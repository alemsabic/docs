import { CodedocConfig } from '@codedoc/core';
import { Footer as _Footer, GitterToggle$, Watermark} from '@codedoc/core/components';


export function Footer(config: CodedocConfig, renderer: any) {
  return <_Footer><a class="" href={`/`}>About</a><hr/><a class="" href={`/`}>Contact</a></_Footer>;
}
