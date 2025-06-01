import { CodeBlockList } from '../../../sanity/sanity.types'
import { CodeBlock } from '../CodeBlock'

type Props = {
  value: CodeBlockList
}

export const CodeBlockListResolver = ({ value }: Props) => {
  return (
    <>
      {value.items?.map((item, index) => {
        if (!item.code?.code) return null
        return (
          <CodeBlock
            key={index}
            filename={item.filename}
            language={item.code.language}
            code={item.code.code}
            highlightedLines={item.code.highlightedLines}
          />
        )
      })}
    </>
  )
}
