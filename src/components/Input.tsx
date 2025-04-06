import React from "react"
import { Button } from "./Button"
import { cn } from "@/utils/cn"

const Input = ({ className, ...props }: React.ComponentProps<"input">) => {
  return <input className={cn("", className)} {...props} />
}
const FormInput = ({
  children,
  className,
  groupClassName,
  ...props
}: { groupClassName?: string } & React.ComponentProps<"input">) => {
  if (children)
    return (
      <div className={cn("relative flex items-center min-w-[150px]", groupClassName)}>
        <input
          className={cn(
            "peer transition outline-hidden rounded-full py-2 pl-4 pr-[calc(1rem+24px)] w-full h-full border-2 focus:border-cta",
            className
          )}
          {...props}
        />
        <Button
          icon
          variant="scale"
          className={cn("absolute focus:text-cta focus:scale-125 focus:bg-transparent right-2")}
        >
          {children}
        </Button>
      </div>
    )
  return (
    <input
      className={cn(
        "peer transition outline-hidden rounded-full py-2 pl-4 pr-[calc(1rem+24px)] w-full h-full border-2 focus:border-cta",
        className
      )}
      {...props}
    />
  )
}

export { Input, FormInput }
