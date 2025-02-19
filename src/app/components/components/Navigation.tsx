'use client'
import { Button } from '@/components/Button'
import {
  DropdownWrapper,
  DropdownContent,
  DropdownItem,
  DropdownSubContent,
  DropdownTrigger,
  DropdownOverlay,
} from '@/components/Dropdown'
import { iconMd } from '@/utils/iconSizes'
import { useRef } from 'react'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { IoIosArrowDown } from 'react-icons/io'

export const Navigation = () => {
  const wrapperRef = useRef<HTMLElement>(null)
  const toggleDisplay = () => wrapperRef.current?.classList.toggle('hidden')

  return (
    <>
      <DropdownTrigger onClick={toggleDisplay}>
        <Button variant="minimal" className="lg:hidden" aria-label="Abrir navegação">
          <HiOutlineMenuAlt3 aria-hidden size={iconMd} />
        </Button>
      </DropdownTrigger>
      <DropdownWrapper as="nav" ref={wrapperRef}>
        <DropdownOverlay onClick={toggleDisplay} />
        <DropdownContent>
          <LiPorqueFoodeli />
          <LiServices />
          <LiMenu />
          <LiContato />
        </DropdownContent>
      </DropdownWrapper>
    </>
  )
}
const LiPorqueFoodeli = () => <DropdownItem className="whitespace-nowrap">Porque Foodeli?</DropdownItem>

const LiServices = () => {
  const servicesRef = useRef<HTMLUListElement>(null)
  const toggleDisplay = () => servicesRef.current?.classList.toggle('hidden')

  return (
    <DropdownItem>
      <Button aria-haspopup="true" aria-expanded="false" variant="minimal" onClick={toggleDisplay}>
        Serviços
        <IoIosArrowDown />
      </Button>
      <DropdownSubContent ref={servicesRef}>
        <DropdownItem>Item 1</DropdownItem>
        <DropdownItem>Item 2</DropdownItem>
        <DropdownItem>Item 3</DropdownItem>
      </DropdownSubContent>
    </DropdownItem>
  )
}
const LiMenu = () => {
  const menuRef = useRef<HTMLUListElement>(null)
  const toggleDisplay = () => menuRef.current?.classList.toggle('hidden')

  return (
    <DropdownItem>
      <Button aria-haspopup="true" aria-expanded="false" variant="minimal" onClick={toggleDisplay}>
        Menu
        <IoIosArrowDown />
      </Button>
      <DropdownSubContent ref={menuRef}>
        <DropdownItem>Item 1</DropdownItem>
        <DropdownItem>Item 2</DropdownItem>
        <DropdownItem>Item 3</DropdownItem>
      </DropdownSubContent>
    </DropdownItem>
  )
}
const LiContato = () => <DropdownItem>Contact</DropdownItem>
