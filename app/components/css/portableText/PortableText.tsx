import {
  PortableText as PortableTextReact,
  type PortableTextProps,
  type PortableTextReactComponents,
} from '@portabletext/react'
import { CodeBlockListResolver } from './CodeBlockListResolver'
import { TextBlockResolver } from './TextBlockResolver'
import { TextBlockListResolver } from './TextBlockListResolver'
import { RichImageListResolver } from './RichImageListResolver'

const components: Partial<PortableTextReactComponents> = {
  types: {
    codeBlockList: CodeBlockListResolver,
    richImageList: RichImageListResolver,
    textBlock: TextBlockResolver,
    textBlockList: TextBlockListResolver,
  },
}

export const PortableText = ({ value }: PortableTextProps) => {
  return <PortableTextReact components={components} value={value} />
}
