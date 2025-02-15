import { Button } from '@/components/Button'
import { Highlight } from '@/components/Text'
import { HiLightningBolt } from 'react-icons/hi'
import { IoPlay } from 'react-icons/io5'

interface IntroductionProps {}
export const Introduction = ({}: IntroductionProps) => {
  return (
    <section className="flex flex-col gap-4 items-start">
      <Button variant="soft" className="hover:cursor-text hover:opacity-100">
        Mais do que rápido!
        <HiLightningBolt />
      </Button>
      <h1 className="font-bold max-w-lg">
        Pegue as Melhores Ofertas em <Highlight>Fast Food</Highlight> e{' '}
        <Highlight>Restaurantes</Highlight>
      </h1>
      <p>
        Nosso trabalho é encher sua barriga com comida deliciosa, com entrega
        rápida e gratuita!
      </p>
      <div className="flex space-x-4">
        <div className='font-poppins'>123456 abcdef sans</div>
        <div className='font-sriracha'>123456 abcdef poppins</div>
        <Button>Começar</Button>
        <Button variant="minimal" className="text-text">
          <div className="bg-cta-secondary rounded-full grid place-content-center aspect-square w-8">
            <IoPlay aria-hidden/>
          </div>
          Ver vídeo
        </Button>
      </div>
    </section>
  )
}
