import './heading.css'

type Props = {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  size: 'sm' | 'md' | 'lg'
  children: string | React.ReactNode
}

export const Heading = ({ as, size, children }: Props) => {
  const HeadingComponent = as

  return (
    <HeadingComponent className={`heading heading-${size}`}>
      {children}
    </HeadingComponent>
  )
}
