"use client"

import { Button } from "@/components/ui/button"
import { IoMoon } from "react-icons/io5"
import { useEffect } from "react"

export const ThemeButton = ({ className }: { className?: string }) => {
  useEffect(() => {
    const theme = localStorage.getItem("theme")
    const run = () => {
      if (theme === "dark") {
        document.documentElement.classList.add("dark")
        document.documentElement.classList.remove("light")
        localStorage.setItem("theme", "dark")
      } else {
        document.documentElement.classList.remove("dark")
        document.documentElement.classList.add("light")
        localStorage.setItem("theme", "light")
      }
    }
    run()
  }, [])

  return (
    <Button
      variant="ghost"
      size="icon"
      className={className}
      onClick={() => {
        document.documentElement.classList.toggle("dark")
        localStorage.setItem(
          "theme",
          document.documentElement.classList.contains("dark") ? "dark" : "light"
        )
      }}
    >
      <IoMoon />
    </Button>
  )
}
