import './text.css'

type Props = {
  children: string | React.ReactNode
  fontSize: 'sm' | 'md' | 'lg'
  style?: 'primary' | 'secondary' | 'muted' | 'highlight'
}

export const Text = ({ children, fontSize, style }: Props) => (
  <div className={`text text-${fontSize} text-${style}`}>{children}</div>
)
