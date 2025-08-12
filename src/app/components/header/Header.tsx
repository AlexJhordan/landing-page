import { Button } from "@/components/ui/button"
import { IconShoppingCart } from "@tabler/icons-react"
import { IoBagHandle, IoLogIn, IoSearch } from "react-icons/io5"
import { Input } from "@/components/ui/input"

import {
  DialogTitle,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog"
import { IoChevronDown, IoMenu } from "react-icons/io5"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { ThemeButton } from "./components/theme-button"
import { navRoutes } from "@/constants/routes"

export const Header = () => {
  return (
    <header className="flex gap-2 w-full justify-between py-2 sm:px-[5%] sticky top-0 z-50 bg-background/90 bg-blur-xs backdrop-blur-xs border-b-[1px] shadow-lg">
      <Button asChild variant="ghost">
        <a href={navRoutes.home} className="flex items-center justify-center gap-1 font-semibold">
          <IconShoppingCart className="size-6 md:size-8" />
          <span className="md:text-xl">Foodeli</span>
        </a>
      </Button>

      {isMobile}

      {isDesktop}

      <div className="flex items-center gap-2 ml-auto lg:ml-0">
        <Input type="search" placeholder="Buscar" className="hidden lg:flex" />

        <Dialog>
          <DialogTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
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

        <Button asChild variant="ghost" size="icon">
          <a href={navRoutes.cart}>
            <IoBagHandle />
          </a>
        </Button>

        <Button asChild>
          <a href={navRoutes.login}>
            <IoLogIn />
            Login
          </a>
        </Button>

        <ThemeButton className="hidden md:inline-flex" />
      </div>
    </header>
  )
}

const navigation = {
  whyFoodeli: {
    label: "Porque Foodeli?",
    link: "#",
  },
  services: {
    label: "Serviços",
    items: [
      { label: "Item 1", link: "#" },
      { label: "Item 2", link: "#" },
      { label: "Item 3", link: "#" },
    ],
  },
  menu: {
    label: "Menu",
    items: [
      { label: "Item 1", link: "#" },
      { label: "Item 2", link: "#" },
      { label: "Item 3", link: "#" },
    ],
  },
  contact: {
    label: "Contato",
    link: "#",
  },
}

const isMobile = (
  <Sheet>
    <SheetTitle className="sr-only">Navegação</SheetTitle>

    <SheetTrigger asChild className="lg:hidden order-3">
      <Button variant="ghost" size="icon">
        <IoMenu size={24} />
      </Button>
    </SheetTrigger>
    <SheetContent className="py-12 pb-4 w-fit px-6 gap-1 scrollbar-hidden overflow-auto">
      <Button asChild variant="ghost" className="justify-end">
        <a href={navigation.whyFoodeli.link}>{navigation.whyFoodeli.label}</a>
      </Button>

      <Accordion type="multiple" className="space-y-1">
        <AccordionItem value="item-1" className="border-b-0">
          <AccordionTrigger asChild className="items-center justify-end gap-2 hover:no-underline">
            <Button variant="ghost" className="has-[>svg]:px-4">
              <IoChevronDown className="mr-auto" />
              {navigation.services.label}
            </Button>
          </AccordionTrigger>
          <AccordionContent className="flex gap-1 flex-col *:w-full *:justify-end">
            {navigation.services.items.map((item, i) => (
              <Button key={i} asChild variant="ghost">
                <a href={item.link}>{item.label}</a>
              </Button>
            ))}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger asChild className="items-center justify-end gap-2 hover:no-underline">
            <Button variant="ghost" className="has-[>svg]:px-4">
              <IoChevronDown className="mr-auto" />
              {navigation.menu.label}
            </Button>
          </AccordionTrigger>
          <AccordionContent className="flex gap-1 flex-col *:w-full *:justify-end">
            {navigation.menu.items.map((item, i) => (
              <Button key={i} asChild variant="ghost">
                <a href={item.link}>{item.label}</a>
              </Button>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button asChild variant="ghost" className="justify-end">
        <a href={navigation.contact.link}>{navigation.contact.label}</a>
      </Button>
    </SheetContent>
  </Sheet>
)

const isDesktop = (
  <nav className="hidden lg:flex gap-2">
    <Button asChild variant="ghost">
      <a href={navigation.whyFoodeli.link}>{navigation.whyFoodeli.label}</a>
    </Button>
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="group">
        <Button variant="ghost" aria-label="Abrir navegação">
          {navigation.services.label}
          <IoChevronDown className="group-data-[state=open]:rotate-180 transition" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent asChild align="center" className="flex flex-col gap-1">
        <ul>
          {navigation.services.items.map((item, index) => (
            <DropdownMenuItem asChild key={index}>
              <Button variant="ghost" asChild>
                <a href={item.link}>{item.label}</a>
              </Button>
            </DropdownMenuItem>
          ))}
        </ul>
      </DropdownMenuContent>
    </DropdownMenu>

    <DropdownMenu>
      <DropdownMenuTrigger asChild className="group">
        <Button variant="ghost" aria-label="Abrir navegação">
          {navigation.menu.label}
          <IoChevronDown className="group-data-[state=open]:rotate-180 transition" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent asChild align="center" className="flex flex-col gap-1">
        <ul>
          {navigation.menu.items.map((item, index) => (
            <DropdownMenuItem asChild key={index}>
              <Button variant="ghost" asChild>
                <a href={item.link}>{item.label}</a>
              </Button>
            </DropdownMenuItem>
          ))}
        </ul>
      </DropdownMenuContent>
    </DropdownMenu>

    <Button asChild variant="ghost">
      <a href={navigation.contact.link}>{navigation.contact.label}</a>
    </Button>
  </nav>
)
