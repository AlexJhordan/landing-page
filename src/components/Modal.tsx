import { tv, type VariantProps } from 'tailwind-variants'

const modalVars = tv({
  base: `bg-transparent backdrop:bg-overlay`,
  variants: {
    variant: {
      top: `my-0 top-4`,
    },
  },
})

export type ModalProps = React.ComponentPropsWithRef<'dialog'> & VariantProps<typeof modalVars>

export const Modal = ({ children, variant, className, ...props }: ModalProps) => {
  return (
    <dialog {...props} className={modalVars({ variant, className })}>
      {children}
    </dialog>
  )
}
