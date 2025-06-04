import { useState, useCallback } from 'react'

type ClipboardStatus = 'idle' | 'success' | 'error'

export function useClipboard(timeout: number = 2000) {
  const [status, setStatus] = useState<ClipboardStatus>('idle')

  const copy = useCallback(
    async (text: string) => {
      if (!navigator.clipboard) {
        console.warn('Clipboard API not available in this browser.')
        setStatus('error')
        return
      }

      try {
        await navigator.clipboard.writeText(text)
        setStatus('success')
      } catch (error) {
        console.error('Failed to copy text:', error)
        setStatus('error')
      }

      setTimeout(() => setStatus('idle'), timeout)
    },
    [timeout]
  )

  const read = useCallback(async (): Promise<string | null> => {
    if (!navigator.clipboard) {
      console.warn('Clipboard API not available in this browser.')
      return null
    }

    try {
      const text = await navigator.clipboard.readText()
      return text
    } catch (error) {
      console.error('Failed to read clipboard:', error)
      return null
    }
  }, [])

  return { copy, read, status }
}
