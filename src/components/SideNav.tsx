import React from 'react'
import { tv } from 'tailwind-variants'

const sideNav = tv({
  slots: {
    wrapper: `grid gap-4 my-4`,
    header: `flex justify-between`,
    content: `flex lg:flex-col gap-2 overflow-x-auto`,
    item: `flex items-center gap-2 shrink-0`,
  },
})
const { wrapper, header, content, item } = sideNav()

type SideNavProps<T extends React.ElementType> = React.ComponentProps<T>

const createSideNavElement = <T extends React.ElementType>(
  element: T,
  slot: (props: { className?: string }) => string,
  newProps?: SideNavProps<T>
) => {
  return function SideNav({ className, ...props }: SideNavProps<T>) {
    const classes = slot({ className })
    return React.createElement(element, { ...newProps, ...props, className: classes }, props.children)
  }
}

export const SideNavWrapper = createSideNavElement('nav', wrapper)
export const SideNavHeader = createSideNavElement('div', header)
export const SideNavContent = createSideNavElement('ul', content)
export const SideNavItem = createSideNavElement('li', item)
