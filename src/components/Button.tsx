import { forwardButtonProps, getButtonVars } from '@/utils/ui'
import { tv, type VariantProps } from 'tailwind-variants'

export const ButtonVars = tv({
  base: 'py-2 px-4 flex items-center gap-1 hover:cursor-pointer rounded-full transition duration-200 ease-in-out hover:brightness-90',
  variants: {
    variant: {
      default: `bg-cta text-text-cta`,
      soft: 'bg-cta/10 text-cta font-semibold hover:opacity-90',
      minimal: 'p-0 font-semibold hover:scale-105',
      destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
      outline: 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
      secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
      ghost: 'hover:bg-accent hover:text-accent-foreground',
      link: 'text-primary underline-offset-4 hover:underline',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})
export type ButtonProps = React.ComponentPropsWithRef<'button'> &
  VariantProps<typeof ButtonVars> & {
    text?: string
    asChild?: boolean
  }
export const Button = ({ asChild, ...props }: ButtonProps) => {
  if (asChild) return forwardButtonProps(props)

  return (
    <button {...props} className={getButtonVars(props)}>
      {props.text}
      {props.children}
    </button>
  )
}
 