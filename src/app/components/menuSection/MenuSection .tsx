'use client'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { FaHamburger, FaPizzaSlice } from 'react-icons/fa'
import { GiCupcake } from 'react-icons/gi'
import { MdLocalDrink, MdRamenDining } from 'react-icons/md'

export const MenuSection = () => {
  const [isSelected, setIsSelected] = useState<string>('Pizza')

  const menuCategories = [
    { icon: <FaPizzaSlice />, text: 'Pizza' },
    { icon: <MdLocalDrink />, text: 'Dryck' },
    { icon: <FaHamburger />, text: 'Burger' },
    { icon: <GiCupcake />, text: 'Cupcake' },
    { icon: <MdRamenDining />, text: 'Ramen' },
  ]

  useEffect(() => {
    const controller = new AbortController()

    return () => controller.abort()
  }, [])

  return (
    <section className="grid lg:grid-cols-[auto_1fr] gap-2 lg:*:nth-1:col-span-3 mb-4">
      <header className="flex justify-between">
        <div>
          <p className="text-primary font-semibold text-xs">Menu</p>
          <h2 className="text-xl font-semibold">Menu que sempre faz você se apaixonar</h2>
        </div>
        {/* <div className="hidden lg:block my-auto mx-4 space-x-2">
          <Button variant="ghost">
            <FaChevronLeft />
          </Button>
          <Button variant="ghost">
            <FaChevronRight />
          </Button>
        </div> */}
      </header>

      <div className="overflow-x-auto">
        <div className="flex gap-1 lg:flex-col">
          {menuCategories.map((item) => (
            <div key={item.text}>
              <Button
                className="lg:justify-start w-full pl-1 py-5"
                variant={isSelected === item.text ? 'default' : 'ghost'}
                onClick={() => setIsSelected(item.text)}
              >
                <span
                  className={`${
                    isSelected === item.text ? 'bg-background text-foreground' : ''
                  } rounded-full p-2`}
                >
                  {item.icon}
                </span>
                {item.text === 'Dryck' ? 'Bebidas' : item.text}
              </Button>
            </div>
          ))}
        </div>
      </div>

      <div className="inline-flex gap-4 lg:ml-4">
        {/* <p className="m-auto">Carregando...</p> */}
        <AiOutlineLoading3Quarters className="animate-spin m-auto size-8" />
      </div>
    </section>
  )
}

// const MenuCard = ({ item }: { item: {} }) => (
//   <article className="shrink-0 relative h-[200px] w-[200px] aspect-square rounded-4xl overflow-hidden">
//     <div className="absolute inset-0 *:object-cover *:w-full *:h-full -z-10 after:absolute after:inset-0 after:bg-linear-to-t after:from-black after:to-transparent after:to-50%">
//       <Image src={item.img.src} width={500} height={500} alt={item.img.alt} />
//     </div>
//     <div className="absolute bottom-0 p-2">
//       <p>Nome: {item.name}</p>
//       <p>Preço: {formatCurrency(item.price)}</p>
//       <Link>Order Now</Link>
//     </div>
//   </article>
// )
