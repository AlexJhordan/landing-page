import React from "react"

export const resizeBackdrop = (backdropRef: React.RefObject<HTMLSpanElement | null>) => {
  if (!backdropRef.current) return

  backdropRef.current.style.width = `${document.documentElement.clientWidth}px`
  backdropRef.current.style.height = `${document.documentElement.clientHeight}px`
}

export const getDropdownElementsIds = (id: string | null) => {
  return {
    triggerId: `trigger-${id}`,
    itemsId: `items-${id}`,
    itemId: `item-${id}`,
    contentId: `content-${id}`,
    backdropId: `backdrop-${id}`,
    chevronIconId: `chevronIcon-${id}`,
  }
}

export const getDropdownElements = (id: string | null) => {
  return {
    content: document.getElementById(`content-${id}`),
    backdrop: document.getElementById(`backdrop-${id}`),
    trigger: document.getElementById(`trigger-${id}`),
    items: document.getElementById(`items-${id}`),
    item: document.getElementById(`item-${id}`),
    chevronIcon: document.getElementById(`chevronIcon-${id}`),
  }
}

export const triggerHandleKeyDown = (
  e: React.KeyboardEvent,
  { isOpen, openDropdown, closeDropdown }: { isOpen: boolean; openDropdown: () => void; closeDropdown: () => void }
) => {
  if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown" || e.key === "ArrowUp") {
    e.preventDefault()
    openDropdown()
  }
  if ((e.key === "Tab" || e.key === "Escape") && isOpen) closeDropdown()
}

export const itemHandleKeyDown = (
  e: React.KeyboardEvent,
  { dropdownId, closeDropdown }: { dropdownId: string | null; closeDropdown: () => void }
) => {
  const { items, trigger } = getDropdownElements(dropdownId)

  const itemList = Array.from((items as HTMLElement)?.querySelectorAll('[role="menuitem"]')) || []

  const currentIndex = itemList.indexOf(document.activeElement as HTMLElement)

  let nextIndex

  if (e.key === "Escape") {
    e.preventDefault()
    closeDropdown()
    trigger?.focus()
  }
  if (e.key === "Tab") closeDropdown()

  if (e.key === "ArrowDown") {
    e.preventDefault()
    nextIndex = (currentIndex + 1) % itemList.length
  } else if (e.key === "ArrowUp") {
    e.preventDefault()
    nextIndex = (currentIndex - 1 + itemList.length) % itemList.length
  }
  if (e.key === " " || e.key === "Enter") {
    e.preventDefault()
    return (document.activeElement as HTMLElement)?.click()
  }
  if (nextIndex !== undefined && nextIndex >= 0) (itemList[nextIndex] as HTMLElement).focus()
}

// export const dropdown = (id: string) => {
//   const { content, backdrop, trigger } = getComponent(id)

//   return {
//     close: () => {
//       content?.classList.remove("block", "animate-fade-in")
//       backdrop?.classList.remove("block")

//       content?.classList.add("animate-fade-out")
//       setTimeout(() => content?.classList.add("hidden"), 100)

//       backdrop?.classList.add("hidden")

//       trigger?.setAttribute("aria-expanded", "false")
//     },
//     open: () => {
//       content?.classList.remove("hidden", "animate-fade-out")
//       backdrop?.classList.remove("hidden")

//       content?.classList.add("block", "animate-fade-in")
//       backdrop?.classList.add("block")

//       trigger?.setAttribute("aria-expanded", "true")
//     },
//     toggle: () => {
//       content?.classList.remove("animate-fade-in", "animate-fade-out")
//       content?.classList.toggle("hidden")
//       backdrop?.classList.toggle("hidden")

//       const isExpanded = trigger?.getAttribute("aria-expanded") === "true"
//       trigger?.setAttribute("aria-expanded", String(!isExpanded))
//       content?.classList.add(isExpanded === true ? "animate-fade-out" : "animate-fade-in")
//     },
//   }
// }

// export const dropdownState = (id: string) => {
//   if (typeof document === "undefined") return false

//   const { content } = getComponent(id)

//   return !!content?.classList.contains("hidden")
// }

// export const passProps = ({
//   children,
//   ...props
// }: { children: React.ReactNode } & VariantProps<typeof buttonVars> & {}) => {
//   return React.Children.map(children, (child) => {
//     if (React.isValidElement(child)) {
//       return React.cloneElement(child, {
//         ...props,
//       })
//     } else {
//       console.warn("Invalid child detected in Dropdown. Expected a valid React element but received: ", child)
//       return children
//     }
//   })
// }

// not used ↓
// export const dropdownToggle = (id: string) => {
//   const { content, backdrop, trigger } = getComponent(id)

//   resizeBackdrop(id)

//   if (content?.classList.contains("hidden")) {
//     trigger?.removeAttribute("aria-expanded")
//     trigger?.setAttribute("aria-expanded", "true")
//     backdrop?.classList.add("block")
//     backdrop?.classList.remove("hidden")
//     content?.classList.remove("hidden")
//     requestAnimationFrame(() => {
//       content?.classList.remove("opacity-0")
//       content?.classList.add("opacity-100")
//     })
//   } else {
//     trigger?.removeAttribute("aria-expanded")
//     trigger?.setAttribute("aria-expanded", "false")

//     backdrop?.classList.add("hidden")
//     backdrop?.classList.remove("block")
//     content?.classList.remove("opacity-100")
//     content?.classList.add("opacity-0")
//     setTimeout(() => content?.classList.add("hidden"), 150)
//   }
// }
