"use client"
import { Button } from "@/components/ui/button"
import { IoChevronDown, IoMenu } from "react-icons/io5"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const navigation = {
  porqueFoodeli: {
    label: "Porque Foodeli?",
    link: "#",
  },
  serviços: {
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
  contato: {
    label: "Contato",
    link: "#",
  },
}

export const Navigation = () => {
  const isMobile = (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="order-3 lg:hidden">
        <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Abrir navegação">
          <IoMenu size={24} />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="flex flex-col gap-1 scrollbar-hidden">
        <Button asChild variant="ghost">
          <a href={navigation.porqueFoodeli.link}>{navigation.porqueFoodeli.label}</a>
        </Button>

        <div onClick={(e) => e.stopPropagation()} onMouseDown={(e) => e.preventDefault()}>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger
                className="group flex items-center justify-center p-0"
                chevronDownIcon={false}
              >
                <Button variant="ghost" asChild className="w-full gap-1">
                  <span>
                    {navigation.serviços.label}
                    <IoChevronDown className="group-data-[state=open]:rotate-180 transition" />
                  </span>
                </Button>
              </AccordionTrigger>
              {navigation.serviços.items.map((item, index) => (
                <AccordionContent key={index} className="flex flex-col">
                  <Button asChild variant="ghost">
                    <a href={item.link}>{item.label}</a>
                  </Button>
                </AccordionContent>
              ))}
            </AccordionItem>
          </Accordion>
        </div>

        <div onClick={(e) => e.stopPropagation()} onMouseDown={(e) => e.preventDefault()}>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger
                className="group flex items-center justify-center p-0"
                chevronDownIcon={false}
              >
                <Button variant="ghost" asChild className="w-full gap-1">
                  <span>
                    {navigation.menu.label}
                    <IoChevronDown className="group-data-[state=open]:rotate-180 transition" />
                  </span>
                </Button>
              </AccordionTrigger>
              {navigation.menu.items.map((item, index) => (
                <AccordionContent key={index} className="flex flex-col">
                  <Button asChild variant="ghost">
                    <a href={item.link}>{item.label}</a>
                  </Button>
                </AccordionContent>
              ))}
            </AccordionItem>
          </Accordion>
        </div>

        <Button asChild variant="ghost">
          <a href={navigation.contato.link}>{navigation.contato.label}</a>
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  )

  const isDesktop = (
    <nav className="hidden lg:flex gap-2">
      <Button asChild variant="ghost">
        <a href={navigation.porqueFoodeli.link}>{navigation.porqueFoodeli.label}</a>
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="group">
          <Button variant="ghost" aria-label="Abrir navegação">
            {navigation.serviços.label}
            <IoChevronDown className="group-data-[state=open]:rotate-180 transition" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent asChild align="center" className="flex flex-col gap-1">
          <ul>
            {navigation.serviços.items.map((item, index) => (
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
        <a href={navigation.contato.link}>{navigation.contato.label}</a>
      </Button>
    </nav>
  )

  return (
    <>
      {isMobile}
      {isDesktop}
    </>
  )
}
