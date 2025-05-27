import type { TextBlock as TextBlockType } from '../../../sanity/sanity.types'

import {
  PortableText as PortableTextReact,
  type PortableTextReactComponents,
} from '@portabletext/react'

import './textBlock.css'
import { Heading } from '../Heading'
import { Text } from '../Text'

type Props = {
  text: TextBlockType['text']
}

const components: Partial<PortableTextReactComponents> = {
  block: {
    h1: ({ children }) => (
      <Heading as="h1" size="lg">
        {children}
      </Heading>
    ),
    h2: ({ children }) => (
      <Heading as="h2" size="md">
        {children}
      </Heading>
    ),
    h3: ({ children }) => (
      <Heading as="h3" size="md">
        {children}
      </Heading>
    ),
    h4: ({ children }) => (
      <Heading as="h4" size="md">
        {children}
      </Heading>
    ),
    normal: ({ children }) => <Text fontSize="md">{children}</Text>,
    strong: ({ children }) => (
      <Text fontSize="md">{<strong>{children}</strong>}</Text>
    ),
    em: ({ children }) => <Text fontSize="md">{<em>{children}</em>}</Text>,
  },
}

export const TextBlock = ({ text }: Props) => {
  return (
    <div className="text-block">
      <PortableTextReact components={components} value={text} />
    </div>
  )
}
