import { Text } from '../Text'
import './richImage.css'

type Props = {
  src: string
  srcSet?: string
  sizes?: string
  altText: string
  caption?: string
  credits?: string
}

export const RichImage = ({
  src,
  srcSet,
  sizes,
  altText,
  caption,
  credits,
}: Props) => {
  const Image = () => (
    <img
      className="rich-image__image"
      alt={altText}
      src={src}
      srcSet={srcSet}
      sizes={sizes}
    />
  )

  if (caption || credits) {
    return (
      <figure className="rich-image__container">
        <Image />
        <figcaption className="rich-image__attributes">
          {caption && (
            <Text style="secondary" fontSize="sm">
              {caption}
            </Text>
          )}
          {credits && (
            <Text style="muted" fontSize="sm">
              {credits}
            </Text>
          )}
        </figcaption>
      </figure>
    )
  }

  return <Image />
}
