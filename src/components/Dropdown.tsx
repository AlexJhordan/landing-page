import { tv } from 'tailwind-variants'
import React from 'react'

const dropdown = tv({
  slots: {
    wrapper: `hidden absolute inset-0 lg:static lg:flex lg:items-center`,
    overlay: `w-full h-full bg-overlay/30 lg:hidden`,
    content: `absolute right-4 top-4 text-text-inverted lg:static lg:text-text lg:flex lg:gap-2`,
    subContent: `hidden lg:absolute`,
    item: `lg:relative`,
  },
})
export const { wrapper, overlay, content, item, subContent } = dropdown()

export type DropdownProps<T extends React.ElementType> = {
  as?: T
} & React.ComponentPropsWithRef<T>

// Trigger
export type RequiredKey<T, K extends keyof T> = Required<Pick<T, K>> & Omit<T, K>
const DropdownTrigger = ({ children, ...props }: RequiredKey<React.ComponentProps<'div'>, 'children'>) => {
  const isValidChild = React.isValidElement(children)

  if (isValidChild) return React.cloneElement(children, { ...props })
}

// Wrapper
const DropdownWrapper = <T extends React.ElementType = 'div'>({
  as: Wrapper = 'nav',
  className,
  ...props
}: DropdownProps<T>) => {
  return (
    <Wrapper {...props} className={wrapper({ className })}>
      {props.children}
    </Wrapper>
  )
}

// Overlay
const DropdownOverlay = ({ className, onClick }: React.ComponentProps<'div'>) => (
  <div className={overlay({ className })} onClick={onClick}></div>
)

// Content
const DropdownContent = <T extends React.ElementType = 'ul'>({
  as: Content = 'ul',
  className,
  ...props
}: DropdownProps<T>) => {
  return (
    <Content {...props} className={content({ className })}>
      {props.children}
    </Content>
  )
}

// SubContent
const DropdownSubContent = <T extends React.ElementType = 'ul'>({
  as: SubContent = 'ul',
  className,
  ...props
}: DropdownProps<T>) => {
  return (
    <SubContent {...props} className={subContent({ className })}>
      {props.children}
    </SubContent>
  )
}

// Item
const DropdownItem = <T extends React.ElementType = 'li'>({
  as: Item = 'li',
  className,
  ...props
}: DropdownProps<T>) => {
  return (
    <Item {...props} className={item({ className })}>
      {props.children}
    </Item>
  )
}

export { DropdownWrapper, DropdownOverlay, DropdownContent, DropdownItem, DropdownSubContent, DropdownTrigger }
