import React from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

export const buttonVars = tv({
  base: `inline-flex items-center justify-center py-2 px-4 -outline-offset-2 w-fit gap-2 hover:cursor-pointer rounded-full transition duration-200 *:transition *:duration-200 `,
  variants: {
    variant: {
      primary: `bg-cta text-text-cta hover:brightness-85`,
      secondary: `bg-cta-secondary text-text-cta`,
      soft: 'bg-cta/10 hover:opacity-90 text-cta font-semibold',
      minimal: `p-0 font-semibold hover:brightness-85 rounded-none outline-offset-3`,
      success: ``,
      destructive: 'bg-destructive text-destructive-foreground shadow-xs hover:bg-destructive/90',
      outline: 'border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground',
      ghost: 'text-text hover:bg-black/10 hover:text-text/85',
      link: `p-0 rounded-none underline-offset-4 hover:underline outline-offset-2`,
    },
    size: {
      auto: `p-0`,
      sm: `py-1 px-2`,
      lg: `py-3 px-5`,
    },
    adjust: {
      square: `aspect-square p-2`,
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

type ButtonProps = React.ComponentPropsWithRef<'button'> &
  VariantProps<typeof buttonVars> & {
    asChild?: boolean
  }
export const Button = ({ asChild, ...props }: ButtonProps) => {
  if (asChild) return forwardButtonProps(props)

  return (
    <button {...props} className={buttonVars(props)}>
      {props.children}
    </button>
  )
}

type LinkProps = React.ComponentPropsWithRef<'a'> & { variant?: keyof typeof buttonVars.variants.variant }
export const Link = ({ children, href = '#', variant = 'link', ...props }: LinkProps) => (
  <Button asChild variant={variant}>
    <a {...props} href={href}>
      {children}
    </a>
  </Button>
)

// Functions
const forwardButtonProps = ({ children, ...props }: ButtonProps) => {
  const isValidChild = React.isValidElement(children)

  if (isValidChild) {
    const childClassName = (children.props as React.HTMLAttributes<HTMLElement>).className
    const classes = `${props.className || ''} ${childClassName || ''}`

    return React.cloneElement(children, {
      ...props,
      ...{
        className: buttonVars({
          ...props,
          className: classes,
        }),
      },
    })
  }
  return children
}
