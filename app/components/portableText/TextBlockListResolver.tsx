import { TextBlockList } from '../../sanity/sanity.types'
import { PortableText } from './PortableText'

type Props = {
  value: TextBlockList
}

export const TextBlockListResolver = ({ value }: Props) => {
  return (
    <>
      {value.items?.map((item, index) => (
        <PortableText key={index} value={item} />
      ))}
    </>
  )
}
