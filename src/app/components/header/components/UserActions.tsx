'use client'
import { IoBagHandle, IoLogIn, IoSearch } from 'react-icons/io5'
import { iconLg } from '@/utils/iconSizes'
import { Button } from '@/components/Button'
import { FormInput } from '@/components/Input'
import { Modal } from '@/components/Modal'
import { useRef } from 'react'

export const UserActions = () => {
  const DialogRef = useRef<HTMLDialogElement>(null)

  const ModalToggle = () => DialogRef.current?.showModal()

  const SearchInput = ({ groupClass }: { groupClass?: string }) => (
    <FormInput type="search" aria-label="Buscar no site" placeholder="Buscar" groupClass={groupClass}>
      <Button variant="minimal" aria-label="Pesquisar">
        <IoSearch />
      </Button>
    </FormInput>
  )
  return (
    <div className="flex items-center gap-2 ml-auto lg:ml-0">
      <Button variant="minimal" onClick={ModalToggle} aria-label="Abrir busca" className="lg:hidden">
        <IoSearch size={iconLg} />
      </Button>

      <Modal ref={DialogRef} className="lg-hidden w-full" variant="top">
        <SearchInput />
      </Modal>

      <SearchInput groupClass="hidden lg:flex" />

      <Button asChild variant="minimal" aria-label="Ir para carrinho">
        <a href="#">
          <IoBagHandle size={iconLg} />
        </a>
      </Button>

      <Button asChild aria-label="Ir para página de login">
        <a href="#">
          <IoLogIn size={iconLg} />
          Login
        </a>
      </Button>
    </div>
  )
}
