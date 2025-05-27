import { CodeBlockList } from '../../../sanity/sanity.types'
import { CodeBlock } from '../CodeBlock'

type Props = {
  value: CodeBlockList
}

export const CodeBlockListResolver = ({ value }: Props) => {
  return (
    <>
      {value.items?.map((item, index) => {
        if (!item.code) return null
        return (
          <CodeBlock
            key={index}
            language={item.language}
            code={item.code}
            highlightedLines={item.highlightedLines}
          />
        )
      })}
    </>
  )
}
