"use client"

import React, { useContext } from "react"
import { cn } from "@/utils/cn"
import { Button, type buttonVars } from "./Button"
import { type VariantProps } from "tailwind-variants"
import {
  resizeBackdrop,
  getDropdownElementsIds,
  triggerHandleKeyDown,
  itemHandleKeyDown,
  getDropdownElements,
} from "@/utils/dropdown"
import { createDropdownStore, type UseDropdown } from "@/hooks/useDropdown"
import type { StoreApi, UseBoundStore } from "zustand"
import { IoChevronDown } from "react-icons/io5"

type HTMlValidTags = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div" | "a" | "nav" | "span" | "li" | "ul"

const DropdownContext = React.createContext<UseBoundStore<StoreApi<UseDropdown>> | null>(null)

const useDropdown = () => {
  const store = useContext(DropdownContext)
  if (!store) {
    throw new Error("useDropdownStore deve ser usado dentro de um <DropdownProvider>")
  }
  return store
}

const Dropdown = ({
  as: Element = "div",
  className,
  children,
}: {
  as?: HTMlValidTags
  children: React.ReactNode
  className?: string
}) => {
  const store = React.useMemo(() => createDropdownStore(), [])
  const { setDropdownId } = store()
  React.useEffect(() => {
    const id = `id-${Math.random().toString(36).slice(2, 9)}`

    setDropdownId(id)
  }, [setDropdownId])
  return (
    <DropdownContext.Provider value={store}>
      <Element className={cn("relative flex items-center justify-center w-fit", className)}>{children}</Element>
    </DropdownContext.Provider>
  )
}

// ~~ Trigger ~~
const DropdownTrigger = ({
  children,
  variant = "scale",
  className,
  chevronIcon,
  ...props
}: { children: React.ReactNode; className?: string; chevronIcon?: boolean } & VariantProps<typeof buttonVars>) => {
  const store = useDropdown()

  const { isOpen, toggleDropdown, openDropdown, closeDropdown, dropdownId } = store()

  const { itemsId, triggerId } = getDropdownElementsIds(dropdownId)

  const backdropRef = React.useRef<HTMLSpanElement | null>(null)

  React.useEffect(() => {
    const resize = () => resizeBackdrop(backdropRef)

    resize()
    // closeDropdown()

    window.addEventListener("resize", resize)

    return () => {
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <>
      <Button
        onClick={() => toggleDropdown()}
        onKeyDown={(e) => triggerHandleKeyDown(e, { isOpen, openDropdown, closeDropdown })}
        variant={variant}
        id={triggerId}
        className={cn("group", className)}
        aria-haspopup="true"
        aria-expanded="false"
        aria-controls={itemsId}
        {...props}
      >
        {children}
        {chevronIcon && <IoChevronDown className={cn("transition-transform", isOpen && "rotate-180")} />}
      </Button>
      <span
        className={cn("fixed top-0 left-0 z-10 opacity-0", isOpen ? "block" : "hidden")}
        ref={backdropRef}
        onClick={closeDropdown}
      />
    </>
  )
}

// ~~ Content ~~
const DropdownContent = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const contentRef = React.useRef<HTMLDivElement>(null)

  const [isFirstRender, setIsFirstRender] = React.useState(true)

  const store = useDropdown()

  const { isOpen } = store()

  React.useEffect(() => {
    const el = contentRef.current

    if (isFirstRender) return setIsFirstRender(false)

    const animationEnd = () => {
      el?.classList.add("hidden")
      contentRef.current?.removeEventListener("animationend", animationEnd)
    }

    if (!isOpen) {
      el?.classList.remove("hidden")
      el?.classList.add("animate-fade-out")
      contentRef.current?.addEventListener("animationend", animationEnd)
    }
  }, [isOpen]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      ref={contentRef}
      className={cn(
        "hidden px-2 transition duration-100 absolute z-50 bg-card/90 backdrop-blur-md py-2 rounded-2xl overflow-y-auto overflow-x-hidden max-h-[70dvh]",
        className,
        !isFirstRender && isOpen && "block animate-fade-in"
      )}
    >
      {children}
    </div>
  )
}

// ~~ Header ~~
const DropdownHeader = ({ children, as }: { children: React.ReactNode; as?: HTMlValidTags }) => {
  return React.createElement(
    as || "h2",
    { className: cn("px-4 font-medium pb-1 mb-1 w-full border-b-[1px] border-text/10 text-center") },
    children
  )
}

// ~~ Items ~~
const DropdownItems = ({
  children,
  as,
  variant = "scale",
  ...props
}: { as?: HTMlValidTags; children: React.ReactNode } & VariantProps<typeof buttonVars>) => {
  const store = useDropdown()

  const { isOpen, dropdownId } = store()

  const { triggerId, itemsId } = getDropdownElementsIds(dropdownId)

  React.useEffect(() => {
    if (!isOpen) return

    const { items } = getDropdownElements(dropdownId)
    const firstItem = items?.querySelector('[role="menuitem"]') as HTMLElement

    firstItem.focus()
  }, [isOpen, dropdownId])

  return React.createElement(
    as || "ul",
    {
      className: cn("flex flex-col items-center **:whitespace-nowrap whitespace-nowrap"),
      role: "menu",
      "aria-labelledby": triggerId,
      id: itemsId,
    },
    React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          ...{
            variant,
            ...props,
          },
        })
      } else {
        console.warn("Invalid child detected in Dropdown. Expected a valid React element but received: ", child)
        return children
      }
    })
  )
}

// ~~ Item ~~
const DropdownItem = ({
  className,
  children,
  asChild,
  variant,
  as,
  ...props
}: { children: React.ReactNode; className?: string; asChild?: boolean; as?: HTMlValidTags } & VariantProps<
  typeof buttonVars
>) => {
  const Item = as || "li"

  const store = useDropdown()

  const { dropdownId, closeDropdown } = store()

  const itemProps = {
    id: getDropdownElementsIds(dropdownId).itemId,
    role: "menuitem",
    tabIndex: -1,
    onClick: closeDropdown,
    onKeyDown: (e: React.KeyboardEvent) => itemHandleKeyDown(e, { dropdownId, closeDropdown }),
    className: cn("w-full", className),
    variant,
    ...props,
  }

  if (asChild) {
    return (
      <Button asChild {...itemProps}>
        {children}
      </Button>
    )
  } else if (React.isValidElement(children)) {
    return (
      <Item className="w-full">
        <Button asChild {...itemProps}>
          {children}
        </Button>
      </Item>
    )
  }
  return (
    <Button as={Item} {...itemProps}>
      {children}
    </Button>
  )
}

// ~~ Group ~~
const DropdownGroup = ({
  children,
  as: Element = "ul",
}: {
  children: React.ReactNode
  className?: string
  as?: HTMlValidTags
}) => {
  return (
    <DropdownItem>
      <Element className={cn("groupSlot")}>{children}</Element>
    </DropdownItem>
  )
}

const DropdownGroupTrigger = ({
  children,
  variant,
  ...props
}: { children: React.ReactNode; className?: string } & VariantProps<typeof buttonVars>) => {
  return (
    <Button className={cn("triggerSlot")} variant={variant} {...props}>
      {children}
    </Button>
  )
}

export {
  Dropdown,
  DropdownHeader,
  DropdownContent,
  DropdownItems,
  DropdownItem,
  DropdownGroup,
  DropdownTrigger,
  DropdownGroupTrigger,
}

{
  /* <Dropdown>
      <DropdownTrigger></DropdownTrigger>
      <DropdownHeader></DropdownHeader>
      <DropdownContent>
        <DropdownItems>
          <DropdownItem></DropdownItem>
        </DropdownItems>
      </DropdownContent>
    </Dropdown> 
*/
}
