import type { ButtonHTMLAttributes, ComponentPropsWithRef } from 'react'
import type { VariantProps } from 'tailwind-variants'
import type { ButtonVars } from '@/components/Button'
import { InputVars } from '@/components/Input'
import type { ModalVars } from '@/components/Modal'

// ButtonTypes
export interface ButtonBase extends ButtonHTMLAttributes<HTMLButtonElement>, ComponentPropsWithRef<'button'> {}
export interface ButtonVariants extends VariantProps<typeof ButtonVars> {}
export interface ButtonProps extends ButtonBase, ButtonVariants {
  text?: string
  classes?: string
}

// InputTypes
export interface InputBase extends ComponentPropsWithRef<'input'> {}
export interface InputVariants extends VariantProps<typeof InputVars>, Pick<InputBase, 'className'> {}

type RequiredInputKey<T, K extends keyof T> = Required<Pick<T, K>> & Omit<T, K>
export interface InputProps extends RequiredInputKey<InputBase, 'type'>, InputVariants {}

export const allowedInputTextTypes = ['text', 'password', 'email', 'search'] as const
export type AllowedInputTextTypes = (typeof allowedInputTextTypes)[number]

// ModalTypes
export interface ModalBase extends ComponentPropsWithRef<'dialog'> {}
export interface ModalVariants extends VariantProps<typeof ModalVars> {}

export interface ModalProps extends ModalBase, ModalVariants {}
