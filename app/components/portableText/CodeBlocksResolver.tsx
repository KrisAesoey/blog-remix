import { CodeBlocks } from "../../sanity/types";
import { PortableText } from "./PortableText";

type Props = {
  value: CodeBlocks;
}

export const CodeBlocksResolver = ({ value }: Props) => {
  return (
    <>
      {value.items.map((item, index) => (
        <PortableText key={index} value={item} />
      ))}
    </>
  )
}