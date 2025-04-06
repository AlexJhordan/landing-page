import { cn } from "@/utils/cn"

export const Dialog = ({children, className, ...props}: React.ComponentProps<'dialog'>) => {
  return (
    <dialog className={cn('', className)} {...props}>
      {children}
    </dialog>
  )
}