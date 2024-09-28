import 'prismjs/themes/prism.css';
import { Refractor, registerLanguage } from "react-refractor";
import css from "refractor/lang/css";
import ts from "refractor/lang/typescript";
import { CodeBlock } from "../../../sanity/types";
import './codeBlockResolver.css';

type Props = {
  value: CodeBlock;
}

registerLanguage(css)
registerLanguage(ts)

export const CodeBlockResolver = ({ value }: Props) => {
  return (
    <Refractor
      language={value.language}
      markers={value.highlightedLines}
      value={value.code}
      />
  )
}
