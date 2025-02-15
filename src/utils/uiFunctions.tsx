import {
  allowedInputTextTypes,
  ButtonProps,
  ButtonVariants,
  InputProps,
  type InputBase,
  type InputVariants,
  type ModalBase,
  type ModalProps,
  type ModalVariants,
} from '@/types/ui'
import { cloneElement, isValidElement } from 'react'
import { ButtonVars } from '@/components/Button'
import { twMerge } from 'tailwind-merge'
import { iconMd } from './sizes'
import { InputVars } from '@/components/Input'
import { ModalVars } from '@/components/Modal'

// Button Functions
export const button = ({ children, text, ...props }: ButtonProps) => (
  <button {...props}>
    {text}
    {children}
  </button>
)
export const getButtonVars = (variant: ButtonVariants['variant'], className?: string) =>
  ButtonVars({ variant, className })

export const isValidChild = (children: React.ReactNode) => isValidElement(children) && true

export const childWithButtonProps = ({ children, ref, className, ...props }: ButtonProps) =>
  isValidChild(children) && injectButtonProps({ children, ref, className, ...props })

export const injectButtonProps = ({ children, ref, ...props }: ButtonProps) =>
  cloneElement(children as React.ReactElement<any>, { ref, ...props })

// Input Functions
export const input = ({ ...props }: InputProps) => <input {...props} />

export const getInputVars = (variant: InputVariants['variant'], className?: string) => InputVars({ variant, className })

export const isValidTextInputType = (inputType?: string): inputType is InputBase['type'] =>
  allowedInputTextTypes.some((type: string) => inputType?.includes(type))

export const textInput = ({ children, type, className, ...props }: InputProps) => (
  <div className='className="relative flex items-center'>
    {input({ type, className: twMerge('peer w-full h-full', className), ...props })}
    {renderIcon(children)}
  </div>
)
export const renderIcon = (children: React.ReactNode) => {
  const defaultSpace = 16
  return (
    isSvgElement(children) &&
    cloneElement(children, {
      'aria-hidden': 'true',
      className: twMerge(`absolute transition peer-focus:text-cta`, children.props.className),
      style: { right: defaultSpace, fontSize: iconMd },
    })
  )
}

export const isSvgElement = (
  children: React.ReactNode
): children is React.ReactElement<React.SVGProps<SVGSVGElement>> => isValidElement(children)

// Modal Functions
export const modal = ({ children, ...props }: ModalProps) => <dialog {...props}>{children}</dialog>

export const getModalVars = (variant: ModalVariants['variant'], className?: string) => ModalVars({ variant, className })
