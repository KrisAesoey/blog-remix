import {
  PortableText as PortableTextReact,
  type PortableTextProps,
  type PortableTextReactComponents,
} from '@portabletext/react'
import { CodeBlockResolver } from './CodeBlockResolver'
import { CodeBlockListResolver } from './CodeBlockListResolver'
import { TextBlockResolver } from './TextBlockResolver'
import { TextBlockListResolver } from './TextBlockListResolver'

const components: Partial<PortableTextReactComponents> = {
  types: {
    codeBlock: CodeBlockResolver,
    codeBlockList: CodeBlockListResolver,
    textBlock: TextBlockResolver,
    textBlockList: TextBlockListResolver,
  },
}

export const PortableText = ({ value }: PortableTextProps) => {
  return <PortableTextReact components={components} value={value} />
}
