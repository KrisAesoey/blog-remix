import type { TextBlockList as TextBlockListType } from '../../../sanity/sanity.types'
import { TextBlockList } from '../TextBlockList'

type Props = {
  value: TextBlockListType
}

export const TextBlockListResolver = ({ value }: Props) => {
  return value.items ? <TextBlockList items={value.items} /> : null
}
