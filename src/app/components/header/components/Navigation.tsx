'use client'
import { useRef } from 'react'
import { Button } from '@/components/Button'
import { IoChevronDown, IoMenu } from 'react-icons/io5'
import { iconLg } from '@/utils/iconSizes'
import {
  DropdownWrapper,
  DropdownContent,
  DropdownItem,
  DropdownSubContent,
  DropdownTrigger,
  DropdownOverlay,
} from '@/components/Dropdown'

export const Navigation = () => {
  const wrapperRef = useRef<HTMLElement>(null)
  const toggleDisplay = () => wrapperRef.current?.classList.toggle('hidden')

  return (
    <>
      <DropdownTrigger onClick={toggleDisplay}>
        <Button variant="minimal" className="lg:hidden order-3 lg:order-none" aria-label="Abrir navegação">
          <IoMenu size={iconLg} />
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
        <IoChevronDown />
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
        <IoChevronDown />
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
