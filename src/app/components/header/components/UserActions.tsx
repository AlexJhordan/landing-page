import { IoBagHandle, IoLogIn, IoSearch } from "react-icons/io5"
import { iconLg } from "@/utils/iconSizes"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { navRoutes } from "@/constants/routes"

import {
  DialogTitle,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ThemeButton } from "./theme"

export const UserActions = () => {
  return (
    <div className="flex items-center gap-2 ml-auto lg:ml-0">
      <Input type="search" placeholder="Buscar" className="hidden lg:flex" />

      <Dialog>
        <DialogTrigger asChild className="lg:hidden">
          <Button variant="outline" size="icon">
            <IoSearch />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Foodeli</DialogTitle>
          </DialogHeader>
          <Input type="search" placeholder="Buscar" />
        </DialogContent>
      </Dialog>

      <Button asChild variant="outline" size="icon">
        <a href={navRoutes.cart}>
          <IoBagHandle size={iconLg} />
        </a>
      </Button>

      <Button asChild>
        <a href={navRoutes.login}>
          <IoLogIn size={iconLg} />
          Login
        </a>
      </Button>

      <ThemeButton />
    </div>
  )
}
