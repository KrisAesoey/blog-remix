import './text.css'

type Props = {
  children: string | React.ReactNode
  fontSize: 'sm' | 'md' | 'lg'
}

export const Text = ({ children, fontSize }: Props) => (
  <div className={`text text-${fontSize}`}>{children}</div>
)
