'use client'
import { Button, Link } from '@/components/Button'
import { SideNavContent, SideNavItem, SideNavWrapper } from '@/components/SideNav'
import { H2, P } from '@/components/Typography'
import { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaHamburger, FaPizzaSlice } from 'react-icons/fa'
import { GiCupcake } from 'react-icons/gi'
import { MdLocalDrink, MdRamenDining } from 'react-icons/md'
import { formatCurrency } from '@/utils/formatCurrency'
import Image from 'next/image'
import type { GetMenu } from '@/types/apiTypes'

export const MenuSection = () => {
  const [isSelected, setIsSelected] = useState<string>('Pizza')
  const [menuData, setMenuData] = useState<GetMenu[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string>()

  const filterByCategory = (category: string) => menuData.filter((item) => item.category === category)

  const menuCategories = [
    { icon: <FaPizzaSlice />, text: 'Pizza' },
    { icon: <MdLocalDrink />, text: 'Dryck' },
    { icon: <FaHamburger />, text: 'Burger' },
    { icon: <GiCupcake />, text: 'Cupcake' },
    { icon: <MdRamenDining />, text: 'Ramen' },
  ]

  useEffect(() => {
    const controller = new AbortController()
    const { signal } = controller

    const fetchMenu = async () => {
      try {
        const response = await fetch('./api/menu', { signal })

        if (!response.ok) throw new Error('Erro ao buscar menu')

        const data = await response.json()

        setMenuData(data)
      } catch (err) {
        if (err instanceof Error) {
          const isAbortError = err.name === 'AbortError'

          if (!isAbortError) {
            console.error(err.message)

            setError(err.message)
          }
        }
      } finally {
        setLoading(false)
      }
    }

    fetchMenu()

    return () => controller.abort()
  }, [])

  if (error) return <p>Erro: {error}</p>

  return (
    <section className="grid lg:grid-cols-[auto_1fr]  lg:*:nth-1:col-span-3">
      <header className="flex justify-between">
        <div>
          <P variant="highlight" size="xs">
            Menu
          </P>
          <H2>Menu que sempre faz você se apaixonar</H2>
        </div>
        <div className="hidden lg:block my-auto mx-4 space-x-2">
          <Button adjust="square" aria-label="Página anterior" variant="ghost">
            <FaChevronLeft />
          </Button>
          <Button adjust="square" aria-label="Próxima página" variant="ghost">
            <FaChevronRight />
          </Button>
        </div>
      </header>

      <SideNavWrapper>
        <SideNavContent>
          {menuCategories.map((item) => (
            <SideNavItem key={item.text}>
              <Button
                className="lg:justify-start w-full pl-2"
                variant={isSelected === item.text ? 'primary' : 'ghost'}
                onClick={() => setIsSelected(item.text)}
              >
                <span className={`${isSelected === item.text ? 'bg-background text-text' : ''} rounded-full p-2`}>
                  {item.icon}
                </span>
                {item.text === 'Dryck' ? 'Bebidas' : item.text}
              </Button>
            </SideNavItem>
          ))}
        </SideNavContent>
      </SideNavWrapper>

      <div className="flex gap-4">
        {loading ? (
          <p className="m-auto">Carregando...</p>
        ) : (
          filterByCategory(isSelected).map((item) => <MenuCard key={item.id} item={item} />)
        )}
      </div>
    </section>
  )
}

const MenuCard = ({ item }: { item: GetMenu }) => (
  <article className="relative aspect-square rounded-4xl overflow-hidden">
    <div className="absolute inset-0 *:object-cover *:w-full *:h-full -z-10 after:absolute after:inset-0 after:bg-linear-to-t after:from-black after:to-transparent after:to-50%">
      <Image src={item.img.src} width={200} height={200} alt={item.img.alt} />
    </div>
    <div className="absolute bottom-0 p-2">
      <p>Nome: {item.name}</p>
      <p>Preço: {formatCurrency(item.price)}</p>
      <Link>Order Now</Link>
    </div>
  </article>
)
