import { tv } from 'tailwind-variants'

const cardVars = tv({
  slots: {
    wrapper: `flex flex-col gap-4 justify-center shadow-lg rounded-4xl bg-card w-fit p-4`,
    title: `font-semibold text-lg`,
    description: `text-sm text-text-secondary`,
    content: `flex flex-col gap-4 justify-center`,
    footer: `flex justify-between gap-2`,
  },
})
const { wrapper, title, content, footer, description } = cardVars()

type CardProps<T extends React.ElementType> = {
  as?: T
} & React.ComponentPropsWithRef<T>

// Wrapper
export const CardWrapper = <T extends React.ElementType = 'div'>({
  as: Wrapper = 'div',
  children,
  className,
  ...props
}: CardProps<T>) => {
  return (
    <Wrapper {...props} className={wrapper({ className: className })}>
      {children}
    </Wrapper>
  )
}
// Title
export const CardTitle = <T extends React.ElementType = 'h2'>({
  as: Title = 'h2',
  children,
  ...props
}: CardProps<T>) => {
  return (
    <Title {...props} className={title({ className: props.className })}>
      {children}
    </Title>
  )
}
export const CardDescription = ({ children, className, ...props }: CardProps<'p'>) => (
  <p {...props} className={description({ className: className })}>
    {children}
  </p>
)
// Content
export const CardContent = <T extends React.ElementType = 'div'>({
  as: Content = 'div',
  children,
  ...props
}: CardProps<T>) => {
  return (
    <Content {...props} className={content({ className: props.className })}>
      {children}
    </Content>
  )
}
// Footer
export const CardFooter = <T extends React.ElementType = 'div'>({
  as: Footer = 'div',
  children,
  ...props
}: CardProps<T>) => {
  return (
    <Footer {...props} className={footer({ className: props.className })}>
      {children}
    </Footer>
  )
}
