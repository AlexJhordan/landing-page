import { Button } from '@/components/Button'
import { HiLightningBolt } from 'react-icons/hi'
import { IoPlay } from 'react-icons/io5'
import { ReviewStars } from './ReviewStars'
import { H1, P, Span } from '@/components/Typography'

export const LeftSide = () => {
  const span = (word: string) => <Span variant="highlight-2">{word}</Span>
  return (
    <div className="flex flex-col py-4 gap-[max(8%,_16px)] text-center items-center lg:text-start lg:items-start lg:max-w-[700px]">
      <div className='space-y-4'>
        <P variant="highlight" size="xs">
          Mais do que rápido!
          <HiLightningBolt aria-hidden />
        </P>

        <H1>
          Pegue as Melhores Ofertas em {span('Fast Food')} e {span('Restaurantes')}
        </H1>
      </div>
      <P className="xs:max-w-[80%]">
        Nosso trabalho é encher sua barriga com comida deliciosa, com entrega rápida e gratuita!
      </P>

      <div className="flex gap-4 mx-auto lg:mx-0">
        <Button>Começar</Button>

        <Button className="text-text rounded-full pr-2 outline-offset-0" >
          <Button asChild variant="secondary" >
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
