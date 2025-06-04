import 'prismjs/themes/prism.css'
import { Refractor, registerLanguage } from 'react-refractor'
import css from 'refractor/lang/css'
import ts from 'refractor/lang/typescript'
import tsx from 'refractor/lang/tsx'

import { Text } from '../Text'

// The refractor-marker class is used to highlight specific lines in the code block
// and is implicitly parsed by Refractor.
import './codeBlock.css'
import { useClipboard } from '../../../hooks/useClipboard'
import { MdContentCopy } from 'react-icons/md'

type Props = {
  code: string
  filename?: string
  highlightedLines?: number[]
  language?: string
}

registerLanguage(css)
registerLanguage(ts)
registerLanguage(tsx)

export const CodeBlock = ({
  code,
  filename,
  language,
  highlightedLines,
}: Props) => {
  const { copy } = useClipboard()

  return (
    <div className="code-block-container">
      <Refractor
        className="code-block"
        language={language ?? ''}
        markers={highlightedLines}
        value={code}
      />
      <div className="code-block-footer">
        {filename && (
          <div
            className="code-block-filename"
            role="note"
            aria-label="filename"
          >
            <Text fontSize="sm" variant="muted">
              {filename}
            </Text>
          </div>
        )}
        <button className="code-block__button" onClick={() => copy(code)}>
          <MdContentCopy />
        </button>
      </div>
    </div>
  )
}
