import React from 'react'
import { iconMd } from './iconSizes'
import { ButtonVars, type ButtonProps } from '@/components/Button'
import { InputVars, type InputProps } from '@/components/Input'

// Button Functions
export const getButtonVars = ({ variant, className }: ButtonProps) => ButtonVars({ variant, className })

export const forwardButtonProps = ({ children, variant, className, ...props }: ButtonProps) => {
  const isValidChild = React.isValidElement(children)

  if (isValidChild) {
    return React.cloneElement(children, {
      ...props,
      ...{ className: getButtonVars({ variant, className }) },
    })
  }
  return children
}

// Input Functions
export const getInputVars = ({ type, className }: InputProps) => InputVars({ input: verifyInputType(type), className })

export const getWrapperVars = ({ type, wrapperClassName }: InputProps) =>
  InputVars({ wrapper: verifyInputType(type), className: wrapperClassName })

export const getIconVars = ({ type }: InputProps) => InputVars({ icon: verifyInputType(type) })

export const verifyInputType = (type: InputProps['type']) => {
  const verifyType = (t: string, allowedTypes: string[]) => allowedTypes.includes(t)

  const inputFormTypes = ['text', 'password', 'email', 'search']

  const isFormType = verifyType(type, inputFormTypes) ? 'form' : undefined

  if (isFormType) return isFormType

  console.warn('This input type does not have variant classes.')
  return undefined
}
export const renderIcon = ({ children, ...props }: InputProps) => {
  const isValidChild = React.isValidElement(children)
  const defaultSpace = 16

  if (isValidChild) {
    return React.cloneElement(children, {
      ...{ 'aria-hidden': 'true' },
      ...{ className: getIconVars(props) },
      ...{ style: { right: defaultSpace, fontSize: iconMd } },
    })
  }
  return children
}
