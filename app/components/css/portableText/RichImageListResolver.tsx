import { RichImageList } from '../../../sanity/sanity.types'
import { RichImageResolver } from './RichImageResolver'

type Props = {
  value: RichImageList
}

export const RichImageListResolver = ({ value }: Props) => {
  return (
    <>
      {value.items?.map((item) => (
        <RichImageResolver key={item._key} image={item} />
      ))}
    </>
  )
}
