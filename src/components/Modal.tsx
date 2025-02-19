import { tv, type VariantProps } from 'tailwind-variants'

export const ModalVars = tv({
  base: `bg-transparent backdrop:bg-overlay`,
  variants: {
    variant: {
      top: `my-0 top-4`,
    },
  },
})

export type ModalProps = React.ComponentPropsWithRef<'dialog'> & VariantProps<typeof ModalVars>

export const Modal = ({ children, variant, className, ...props }: ModalProps) => {
  return (
    <dialog {...props} className={ModalVars({ variant, className })}>
      {children}
    </dialog>
  )
}
