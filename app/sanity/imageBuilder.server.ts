import ImageUrlBuilder from '@sanity/image-url'
import { RichImage } from './sanity.types'
import { sanityClient } from './client.server'

const builder = ImageUrlBuilder(sanityClient)

export function sanityUrlFor(source: RichImage) {
  return builder.image(source)
}
