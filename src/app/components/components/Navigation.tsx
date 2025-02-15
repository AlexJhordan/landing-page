'use client'
import { Button } from '@/components/Button'
import { iconMd } from '@/utils/sizes'
import { useState } from 'react'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { IoIosArrowDown } from 'react-icons/io'
import { twMerge } from 'tailwind-merge'

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const mobileState = isOpen ? 'flex' : 'hidden'
  const mobile = 'lg:flex lg:gap-4 lg:flex-row lg:static lg:shadow-none'
  return (
    <>
      <Button variant="minimal" onClick={() => setIsOpen(!isOpen)} className="lg:hidden" aria-label="Abrir navegação">
        <HiOutlineMenuAlt3 aria-hidden={true} size={iconMd} />
      </Button>
      <nav className={twMerge('relative flex items-center z-1', mobileState)}>
        <ul
          className={twMerge(
            'flex absolute top-full right-0 flex-col shadow-md [&>li]:flex [&>li]:items-center [&>li]:justify-end',
            mobile
          )}
        >
          <li className="whitespace-nowrap">Porque Foodeli?</li>
          <li>
            Serviços
            <IoIosArrowDown />
          </li>
          <li>
            Menu
            <IoIosArrowDown />
          </li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
  )
}
