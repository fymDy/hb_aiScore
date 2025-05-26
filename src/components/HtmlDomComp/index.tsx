import React from 'react';
import parse, {
  domToReact,
  HTMLReactParserOptions,
  Element,
  DOMNode,
} from 'html-react-parser';

interface HtmlDomProps {
  
  html: string;
  replaceCustomTags?: boolean;
   className?:string
}

const HtmlDom: React.FC<HtmlDomProps> = ({
  html,
  replaceCustomTags = true,
  className=''
}) => {
  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (!replaceCustomTags) return;
      // 替换 <m> 为 <div>
      if (domNode.type === 'tag' && (domNode as Element).name === 'm') {
        const element = domNode as Element;
        return <div>{domToReact(element.children as DOMNode[], options)}</div>;
      }
    },
  };

  return <div className={className} >{parse(html, options)}</div>;
};

export default HtmlDom;
