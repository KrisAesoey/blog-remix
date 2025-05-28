import { Text } from '../Text'

import './listItem.css'

type Props = {
  children: React.ReactNode
}

export const ListItem = ({ children }: Props) => (
  <li className="list-item">
    <Text fontSize="md">{children}</Text>
  </li>
)
