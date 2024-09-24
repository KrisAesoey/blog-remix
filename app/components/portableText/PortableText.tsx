import {
  PortableText as PortableTextReact,
  type PortableTextProps,
  type PortableTextReactComponents
} from "@portabletext/react";
import { TextBlockResolver } from "./TextBlockResolver";
import { TextBlocksResolver } from "./TextBlocksResolver";

const components: Partial<PortableTextReactComponents> = {
  types: {
    textBlock: TextBlockResolver,
    textBlocks: TextBlocksResolver,
  },
};

export const PortableText = ({ value }: PortableTextProps) => {
  return <PortableTextReact components={components} value={value} />;
};