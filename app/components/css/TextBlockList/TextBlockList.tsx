import { TextBlock as TextBlockType } from '../../../sanity/sanity.types'
import { TextBlock } from '../TextBlock'

import './textBlockList.css'

type Props = {
  items: TextBlockType[]
}

export const TextBlockList = ({ items }: Props) => {
  return (
    <div className="text-block-list">
      {items.map((item, index) => (
        <TextBlock key={index} text={item.text} />
      ))}
    </div>
  )
}
