'use client'
import type { InputProps } from '@/types/ui'
import { getInputVars, input, isValidTextInputType, textInput } from '@/utils/uiFunctions'
import { tv } from 'tailwind-variants'

export const InputVars = tv({
  base: 'outline-none rounded-full py-2 px-5 transition no-search-icon',
  variants: {
    variant: {
      text: 'border-2 border-border focus:border-border-focus',
    },
  },
  defaultVariants: {
    variant: 'text',
  },
})

export const Input = ({ children, type, className, variant, ...props }: InputProps) => {
  const classes = getInputVars(variant, className)

  if (isValidTextInputType(type)) return textInput({ children, type, className: classes, ...props })

  return input({ type, className: classes, ...props })
}
