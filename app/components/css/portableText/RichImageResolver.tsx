import { sanityUrlFor } from '../../../sanity/imageBuilder'
import { RichImage as RichImageType } from '../../../sanity/sanity.types'
import { RichImage } from '../RichImage'

type Prop = {
  image: RichImageType
}

export const RichImageResolver = ({ image }: Prop) => {
  const { caption, credits, altText } = image

  const imageUrl = (width: number) => {
    return sanityUrlFor(image).width(width).url()
  }

  return (
    <RichImage
      src={imageUrl(800)}
      srcSet={`
        ${imageUrl(400)} 400w,
        ${imageUrl(800)} 800w,
        ${imageUrl(1200)} 1200w,
        ${imageUrl(1600)} 1600w,
        `}
      sizes="
        (max-width: 800px) 100vw,
        (max-width: 1200px) 50vw,
        800px
      "
      altText={altText}
      caption={caption}
      credits={credits}
    />
  )
}
