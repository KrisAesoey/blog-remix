import './unorderedList.css'

type Props = {
  children: React.ReactNode
}

export const UnorderedList = ({ children }: Props) => (
  <ul className="unordered-list">{children}</ul>
)
