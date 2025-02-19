'use client'
import { IoBagHandle, IoLogIn, IoSearch } from 'react-icons/io5'
import { iconMd } from '@/utils/iconSizes'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { Modal } from '@/components/Modal'
import { useRef } from 'react'

export const UserActions = () => {
  const DialogRef = useRef<HTMLDialogElement>(null)

  const ModalToggle = () => DialogRef.current?.showModal()

  const SearchInput = ({ wrapperClassName }: { wrapperClassName?: string }) => (
    <Input type="search" aria-label="Buscar no site" wrapperClassName={wrapperClassName}>
      <IoSearch className="hidden" />
    </Input>
  )
  return (
    <div className="flex items-center gap-2 ml-auto lg:ml-0 lg:order-1">
      <Button variant="minimal" onClick={ModalToggle} aria-label="Abrir busca" className="lg:hidden">
        <IoSearch size={iconMd} />
      </Button>

      <Modal ref={DialogRef} className="lg-hidden w-full" variant="top">
        <SearchInput />
      </Modal>

      <SearchInput wrapperClassName="hidden lg:flex" />

      <Button asChild variant="minimal" aria-label="Ir para carrinho">
        <a href="#">
          <IoBagHandle size={iconMd} />
        </a>
      </Button>

      <Button asChild aria-label="Ir para página de login">
        <a href="#">
          <IoLogIn size={iconMd} />
          Login
        </a>
      </Button>
    </div>
  )
}
