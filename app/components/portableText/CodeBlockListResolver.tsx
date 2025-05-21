import { CodeBlockList } from '../../sanity/sanity.types'
import { PortableText } from './PortableText'

type Props = {
  value: CodeBlockList
}

export const CodeBlockListResolver = ({ value }: Props) => {
  return (
    <>
      {value.items?.map((item, index) => (
        <PortableText key={index} value={item} />
      ))}
    </>
  )
}
