import { MobileNavigation, DesktopNavigation } from "./components/Navigation"
import { UserActions } from "./components/UserActions"
import { Link } from "@/components/Button"
import { IoFastFood } from "react-icons/io5"

export const Header = () => {
  return (
    <header className="flex gap-2 w-full justify-between">
      <Brand />

      <MobileNavigation />

      <DesktopNavigation />

      <UserActions />
    </header>
  )
}

export const Brand = () => (
  <Link href="#home" aria-label="Ir parar home" variant="scale" size="3xl" className="text-cta">
    <IoFastFood />
    <span className="hidden md:block">Foodeli</span>
  </Link>
)
