import 'prismjs/themes/prism.css'
import { Refractor, registerLanguage } from 'react-refractor'
import css from 'refractor/lang/css'
import ts from 'refractor/lang/typescript'

import { Text } from '../Text'

// The refractor-marker class is used to highlight specific lines in the code block
// and is implicitly parsed by Refractor.
import './codeBlock.css'

type Props = {
  code: string
  filename?: string
  highlightedLines?: number[]
  language?: string
}

registerLanguage(css)
registerLanguage(ts)

export const CodeBlock = ({
  code,
  filename,
  language,
  highlightedLines,
}: Props) => {
  return (
    <div className="code-block-container">
      <Refractor
        className="code-block"
        language={language ?? ''}
        markers={highlightedLines}
        value={code}
      />
      {filename && (
        <div className="code-block-filename">
          <Text fontSize="sm" variant="muted">
            {filename}
          </Text>
        </div>
      )}
    </div>
  )
}
