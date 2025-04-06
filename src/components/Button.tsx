"use client"

import React from "react"
import { cn } from "@/utils/cn"
import { tv, type VariantProps } from "tailwind-variants"

export const buttonVars = tv({
  base: "flex items-center justify-center py-2 px-5 outline-none gap-2 rounded-full hover:cursor-pointer transition duration-200",
  variants: {
    variant: {
      primary: "bg-cta text-text hover:bg-text/95 hover:text-cta focus:bg-text/95 focus:text-cta",
      secondary: "bg-cta-secondary text-text-cta",
      ghost: "hover:bg-focus focus:bg-focus",
      link: "underline-offset-4 hover:underline focus:bg-focus",
      scale: "hover:scale-110 hover:text-cta focus:bg-focus",
    },
    size: {
      sm: "text-sm [&>svg]:size-4",
      md: "text-base [&>svg]:size-4",
      lg: "text-lg [&>svg]:size-5",
      "3xl": "text-3xl [&>svg]:size-8",
    },
    icon: {
      true: "p-3 rounded-full aspect-square",
      false: "",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
    icon: false,
  },
})

type HTMlValidTags = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div" | "a" | "nav" | "span" | "li" | "ul" | "button"

type ButtonProps<T extends HTMlValidTags> = React.ComponentProps<T> & {
  asChild?: boolean
  as?: T
} & VariantProps<typeof buttonVars>

export const Button = <T extends HTMlValidTags = "button">(props: ButtonProps<T>) => {
  const { className, variant, size, icon, ...otherProps } = props
  const { as, asChild, children, ...rest } = otherProps
  const variants = { icon, variant, size }

  if (as && React.isValidElement(children)) {
    return React.createElement(
      as,
      {
        className: cn(buttonVars({ className, ...variants })),
        ...rest,
      },
      children
    )
  }

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: cn(
        buttonVars({
          className: cn(className, (children as React.ReactElement<{ className?: string }>).props.className),
          ...variants,
        })
      ),
      ...rest,
    })
  }

  return React.createElement(
    "button",
    {
      className: cn(buttonVars({ className, ...variants })),
      ...rest,
    },
    children
  )
}

export const Link = (props: React.ComponentProps<"a"> & VariantProps<typeof buttonVars>) => {
  const { className, variant = "link", size, icon, ...rest } = props

  const variants = { variant, icon, size }

  return React.createElement("a", {
    role: "link",
    tabIndex: 0,
    className: cn(buttonVars({ className, ...variants })),
    ...rest,
  })
}
