import { iconLg } from '@/utils/iconSizes'
import React from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

export const inputVars = tv({
  variants: {
    input: {
      form: `outline-hidden rounded-full py-2 pl-5 pr-[50px] transition no-search-icon peer w-full h-full border-2 border-border focus:border-border-focus`,
    },
    icon: {
      form: `absolute transition peer-focus:text-cta right-5`,
    },
    wrapper: {
      form: `relative flex items-center`,
    },
  },
})

type InputProps = Omit<React.ComponentPropsWithRef<'input'>, 'type'> & VariantProps<typeof inputVars>

type FormInputProps = InputProps & {
  type: 'text' | 'password' | 'email' | 'search'
  groupClass?: string
}
export const FormInput = ({ className, children, groupClass, ...props }: FormInputProps) => {
  return (
    <div className={inputVars({ wrapper: 'form', className: groupClass })}>
      <input {...props} className={inputVars({ input: 'form', className })} />
      {renderIcon(children, 'form')}
    </div>
  )
}

const renderIcon = (children: InputProps['children'], variantType: keyof typeof inputVars.variants.icon) => {
  const isValidChild = React.isValidElement(children)

  if (isValidChild) {
    return React.cloneElement(children, {
      ...{
        className: inputVars({ icon: variantType }),
        style: { fontSize: iconLg },
      },
    })
  }
  return children
}
