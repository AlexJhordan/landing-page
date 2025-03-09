import React from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const baseClasses = {
  highlight: `inline-flex justify-center items-center gap-1 w-fit text-cta`,
}
const typographyVars = tv({
  variants: {
    variant: {
      title: `font-semibold text-balance`,
      paragraph: `text-pretty`,
      muted: `text-sm text-text-secondary`,
      highlight: `${baseClasses.highlight} font-semibold uppercase bg-cta/10 py-1 px-2 rounded-full`,
      'highlight-2': `${baseClasses.highlight} font-corugette`,
    },
    size: {
      xs: `text-xs`,
      lg: `text-lg xs:text-xl sm:text-2xl`,
      xl: `text-xl xs:text-2xl sm:text-3xl`,
      'title-primary': `text-2xl xs:text-4xl sm:text-5xl`,
    },
    adjust: {
      'align-content': `inline-flex justify-center items-center gap-1 w-fit *:w-fit`,
    },
  },
})

type TypographyProps<T extends React.ElementType> = React.ComponentProps<T> & VariantProps<typeof typographyVars>

type DefaultClasses = {
  variantDefault: keyof typeof typographyVars.variants.variant
  sizeDefault?: keyof typeof typographyVars.variants.size
}

const createTypographyElement = <T extends React.ElementType>(element: T) => {
  return function Typography(props: TypographyProps<T>) {
    const defaultClasses = defaultTypographyVariants[element as keyof typeof defaultTypographyVariants]

    const classes = generateTypographyClasses(props, defaultClasses)

    return React.createElement(element, { ...props, className: classes }, props.children)
  }
}

const defaultTypographyVariants = {
  h1: { variantDefault: 'title', sizeDefault: 'title-primary' },
  h2: { variantDefault: 'title', sizeDefault: 'xl' },
  h3: { variantDefault: 'title', sizeDefault: 'lg' },
  p: { variantDefault: 'paragraph' },
  span: { variantDefault: 'highlight' },
} satisfies Record<string, DefaultClasses>

// Components
export const H1 = createTypographyElement('h1')
export const H2 = createTypographyElement('h2')
export const H3 = createTypographyElement('h3')
export const P = createTypographyElement('p')
export const Span = createTypographyElement('span')

// Functions
const generateTypographyClasses = <T extends React.ElementType>(
  { variant, size, className, ...props }: TypographyProps<T>,
  { variantDefault, sizeDefault }: DefaultClasses
) => {
  return typographyVars({
    ...props,
    variant: variant || variantDefault,
    size: size || sizeDefault,
    className: className,
  })
}
