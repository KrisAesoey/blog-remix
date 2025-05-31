import ImageUrlBuilder from '@sanity/image-url'
import { RichImage } from './sanity.types'
import { sanityDataset, sanityProjectId } from './config'

const builder = ImageUrlBuilder({
  projectId: sanityProjectId,
  dataset: sanityDataset,
})

export function sanityUrlFor(source: RichImage) {
  return builder.image(source)
}
