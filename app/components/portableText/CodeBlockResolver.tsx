import 'prismjs/themes/prism.css';
import { Refractor, registerLanguage } from "react-refractor";
import ts from "refractor/lang/typescript";
import { CodeBlock } from "../../sanity/types";

type Props = {
  value: CodeBlock;
}

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