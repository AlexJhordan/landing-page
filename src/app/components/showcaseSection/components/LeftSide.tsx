import { Button } from '@/components/ui/button'
import { HiLightningBolt } from 'react-icons/hi'
import { IoPlay } from 'react-icons/io5'
import { ReviewStars } from './ReviewStars'

export const LeftSide = () => {
  const span = (word: string) => (
    <span className="text-primary text-4xl lg:text-6xl whitespace-nowrap font-sriracha">
      {word}
    </span>
  )
  return (
    <div className="flex flex-col py-4 gap-[max(8%,_16px)] text-center items-center lg:text-start lg:items-start lg:max-w-[700px]">
      <div className="space-y-4">
        <p className="flex gap-1 items-center text-xs rounded-full bg-secondary text-secondary-foreground font-semibold py-1 px-2 w-fit">
          Mais do que rápido!
          <HiLightningBolt aria-hidden />
        </p>

        <h1 className="text-3xl lg:text-5xl font-semibold">
          Pegue as Melhores Ofertas em {span('Fast Food')} e {span('Restaurantes')}
        </h1>
      </div>
      <p className="xs:max-w-[80%]">
        Nosso trabalho é encher sua barriga com comida deliciosa, com entrega rápida e gratuita!
      </p>

      <div className="flex gap-4 mx-auto lg:mx-0">
        <Button>Começar</Button>

        <Button className="py-2 pl-0 pr-2" variant="ghost">
          <Button asChild variant="secondary" size="icon">
            <span>
              <IoPlay />
            </span>
          </Button>
          Ver vídeo
        </Button>
      </div>

      <ReviewStars />
    </div>
  )
}
