import { getInputVars, getWrapperVars, renderIcon } from '@/utils/ui'
import { tv, type VariantProps } from 'tailwind-variants'

export const InputVars = tv({
  base: ``,
  variants: {
    input: {
      form: `outline-none rounded-full py-2 px-5 transition no-search-icon peer w-full h-full border-2 border-border focus:border-border-focus`,
    },
    icon: {
      form: `absolute transition peer-focus:text-cta`,
    },
    wrapper: {
      form: `relative flex items-center`,
    },
  },
})

export type InputProps = Required<Pick<React.ComponentPropsWithRef<'input'>, 'type'>> &
  Omit<React.ComponentPropsWithRef<'input'>, 'type'> &
  VariantProps<typeof InputVars> & {
    wrapperClassName?: string
  }

export const Input = (props: InputProps) => {
  const inputElement = <input className={getInputVars(props)} />

  if (props.children)
    return (
      <div className={getWrapperVars(props)}>
        {inputElement}
        {renderIcon(props)}
      </div>
    )
  return inputElement
}
