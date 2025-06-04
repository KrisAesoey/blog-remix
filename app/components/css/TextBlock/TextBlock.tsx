import type { TextBlock as TextBlockType } from '../../../sanity/sanity.types'

import {
  PortableText as PortableTextReact,
  type PortableTextReactComponents,
} from '@portabletext/react'

import './textBlock.css'
import { Heading } from '../Heading'
import { Text } from '../Text'
import { OrderedList } from '../OrderedList'
import { ListItem } from '../ListItem'
import { UnorderedList } from '../UnorderedList'

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
      <Heading as="h3" size="sm">
        {children}
      </Heading>
    ),
    h4: ({ children }) => (
      <Heading as="h4" size="sm">
        {children}
      </Heading>
    ),
    normal: ({ children }) => <Text fontSize="md">{children}</Text>,
    strong: ({ children }) => (
      <Text fontSize="md">{<strong>{children}</strong>}</Text>
    ),
    em: ({ children }) => <Text fontSize="md">{<em>{children}</em>}</Text>,
  },
  list: {
    bullet: ({ children }) => <UnorderedList>{children}</UnorderedList>,
    number: ({ children }) => <OrderedList>{children}</OrderedList>,
  },
  listItem: ({ children }) => <ListItem>{children}</ListItem>,
}

export const TextBlock = ({ text }: Props) => {
  return (
    <div className="text-block">
      <PortableTextReact components={components} value={text} />
    </div>
  )
}
