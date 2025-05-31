import './text.css'

type Props = {
  children: string | React.ReactNode
  fontSize: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'secondary' | 'muted' | 'highlight'
}

export const Text = ({ children, fontSize, variant }: Props) => (
  <div className={`text text-${fontSize} text-${variant ?? 'primary'}`}>
    {children}
  </div>
)
