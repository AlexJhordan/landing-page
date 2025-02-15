import type { ModalProps } from '@/types/ui'
import { getModalVars, modal } from '@/utils/uiFunctions'
import { tv } from 'tailwind-variants'

export const ModalVars = tv({
  base: 'bg-transparent backdrop:bg-slate-800/50',
  variants: {
    variant: {
      'input-text': '',
    },
  },
})

export const Modal = ({ children, className, variant, ...props }: ModalProps) => {
  const classes = getModalVars(variant, className)

  return modal({ className: classes, children, ...props })
}
