import { PortableText as PortableTextReact } from "@portabletext/react";
import type { TextBlock } from "../../sanity/types";

type Props = {
  value: TextBlock;
};

export const TextBlockResolver = ({ value }: Props) => {
  return <PortableTextReact value={value.content} />;
}