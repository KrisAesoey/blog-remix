import { TextBlocks } from "../../sanity/types";
import { PortableText } from "./PortableText";

type Props = {
  value: TextBlocks;
}

export const TextBlocksResolver = ({ value }: Props) => {
  return (
    <>
      {value.items.map((item, index) => (
        <PortableText key={index} value={item} />
      ))}
    </>
  )
}