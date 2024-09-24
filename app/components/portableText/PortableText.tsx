import {
  PortableText as PortableTextReact,
  type PortableTextProps,
  type PortableTextReactComponents
} from "@portabletext/react";
import { CodeBlockResolver } from "./CodeBlockResolver";
import { CodeBlocksResolver } from "./CodeBlocksResolver";
import { TextBlockResolver } from "./TextBlockResolver";
import { TextBlocksResolver } from "./TextBlocksResolver";

const components: Partial<PortableTextReactComponents> = {
  types: {
    codeBlock: CodeBlockResolver,
    codeBlocks: CodeBlocksResolver,
    textBlock: TextBlockResolver,
    textBlocks: TextBlocksResolver,
  },
};

export const PortableText = ({ value }: PortableTextProps) => {
  return <PortableTextReact components={components} value={value} />;
};