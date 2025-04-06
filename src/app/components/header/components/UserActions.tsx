"use client"

import { IoBagHandle, IoLogIn, IoSearch } from "react-icons/io5"
import { iconLg } from "@/utils/iconSizes"
import { Button, Link } from "@/components/Button"
import { useRef } from "react"
import { Dialog } from "@/components/Dialog"
import { FormInput } from "@/components/Input"

export const UserActions = () => {
  const modalRef = useRef<HTMLDialogElement>(null)

  return (
    <div className="flex items-center gap-2">
      <Button
        icon
        variant="scale"
        onClick={() => modalRef.current?.showModal()}
        aria-label="Abrir busca"
        className="lg:hidden"
      >
        <IoSearch size={iconLg} />
      </Button>

      <Dialog ref={modalRef} className="lg:hidden">
        <FormInput aria-label="Buscar no site" placeholder="Buscar">
          <IoSearch aria-label="Pesquisar" />
        </FormInput>
      </Dialog>

      <FormInput aria-label="Buscar no site" placeholder="Buscar" groupClassName="hidden lg:flex">
        <IoSearch aria-label="Pesquisar" />
      </FormInput>

      <Link icon variant="scale" aria-label="Ir para carrinho" href="#">
        <IoBagHandle size={iconLg} />
      </Link>

      <Link variant="primary" aria-label="Ir para página de login" href="#">
        <IoLogIn size={iconLg} />
        Login
      </Link>
    </div>
  )
}
