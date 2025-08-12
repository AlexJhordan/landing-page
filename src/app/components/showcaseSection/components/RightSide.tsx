import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { LuChefHat } from 'react-icons/lu'
import { IoCall, IoStar, IoStarHalf } from 'react-icons/io5'
import { navRoutes } from '@/constants/routes'

export const RightSide = () => {
  const stars = ['icon1', 'icon2', 'icon3', 'icon4']
  return (
    <div className="relative">
      <Image
        src="/images/aprFood.png"
        width={500}
        height={500}
        alt="Food"
        className="aspect-[125/113] object-cover w-[650px] mx-auto rounded-full opacity-50 xl:opacity-100"
      />

      <Button
        asChild
        variant="secondary"
        className="group shadow-lg py-6 w-fit justify-between absolute top-8 inset-x-0 xl:inset-x-auto xl:top-auto xl:bottom-[20%] xl:-left-[min(12dvw,_150px)] xl:mx-0 mx-auto"
      >
        <a href={navRoutes.call}>
          <LuChefHat className="m-1 size-6" />
          <span className="*:leading-3.5 text-center  ">
            <p className="font-semibold">Richard Watson</p>
            <p className="text-xs">Cheff</p>
          </span>
          <IoCall className="m-1 size-5" />
        </a>
      </Button>

      <div className="bg-card rounded-3xl w-fit flex absolute top-[40%] inset-x-0 mx-auto xl:mx-0 xl:top-auto xl:-bottom-[5%] xl:inset-x-auto xl:-right-[2dvw] flex-row">
        <Image
          width={100}
          height={100}
          src="https://images.unsplash.com/photo-1555072956-7758afb20e8f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Foto de Pinar Kucuk na Unsplash"
          className="object-cover aspect-square w-[100px] h-auto rounded-l-3xl object-[0%_75%]"
        />
        <div className="flex flex-col gap-1 p-4 justify-center">
          <p className="font-bold text-lg">Especial da casa</p>
          <div className="flex text-secondary -mt-2 *:mr-2 *:size-3">
            {stars.map((icon) => (
              <IoStar aria-hidden key={icon} />
            ))}
            <IoStarHalf aria-hidden />
          </div>
          <p className="font-medium">
            <span className="text-secondary font-semibold text-[10px]">R$</span> 39,49
          </p>
        </div>
      </div>
    </div>
  )
}
