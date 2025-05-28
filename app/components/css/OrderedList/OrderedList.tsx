import './orderedList.css'

type Props = {
  children: React.ReactNode
}

export const OrderedList = ({ children }: Props) => (
  <ol className="ordered-list">{children}</ol>
)
