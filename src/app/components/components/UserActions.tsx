'use client'
import { IoBagHandle, IoFastFood, IoLogIn, IoSearch } from 'react-icons/io5'
import { iconMd } from '@/utils/sizes'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { Modal } from '@/components/Modal'
import { useRef } from 'react'

export const UserActions = () => {
  const DialogRef = useRef<HTMLDialogElement>(null)
  const ModalToggle = () => DialogRef.current?.showModal()

  const SearchUserActions = (
    <Input type="search" aria-label="Buscar no site">
      <IoSearch />
    </Input>
  )
  return (
    <div className="flex items-center gap-2 ml-auto lg:ml-0 lg:order-1">
      <div className="lg:hidden">
        <Button onClick={ModalToggle} variant="minimal" aria-label="Abrir busca">
          <IoSearch size={iconMd} />
        </Button>
        <Modal ref={DialogRef}>{SearchUserActions}</Modal>
      </div>
      <div className="hidden lg:block">{SearchUserActions}</div>

      <Button asChild variant="minimal" aria-label="Ir para carrinho">
        <a>
          <IoBagHandle size={iconMd} aria-hidden />
        </a>
      </Button>

      <Button asChild aria-label="Ir para página de login">
        <div>
          <IoLogIn size={iconMd} aria-hidden />
          Login
        </div>
      </Button>
    </div>
  )
}
