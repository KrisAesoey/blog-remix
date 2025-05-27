import type { TextBlock as TextBlockType } from '../../../sanity/sanity.types'
import { TextBlock } from '../TextBlock'

type Props = {
  value: TextBlockType
}

export const TextBlockResolver = ({ value }: Props) => {
  return <TextBlock text={value.text} />
}
