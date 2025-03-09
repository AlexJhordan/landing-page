import { H2, H3, P } from '@/components/Typography'
import { OrderFood } from '../../../../public/svg/OrderFood'
import { TakeAway } from '../../../../public/svg/TakeAway'
import { Waiters } from '../../../../public/svg/Waiters'

export const ServicesSection = () => {
  const features = [
    {
      id: 'service1',
      title: 'Fácil pedir',
      desc: 'Faça seu pedido com poucos cliques no conforto de sua casa.',
      svg: <OrderFood aria-hidden />,
    },
    {
      id: 'service2',
      title: 'Entréga rápida',
      desc: 'Entrega sempre no horário, ainda mais rápida.',
      svg: <TakeAway aria-hidden />,
    },
    {
      id: 'service3',
      title: 'Melhor Qualidade',
      desc: 'Não somos só rápidos, a qualidade também é a número um.',
      svg: <Waiters aria-hidden />,
    },
  ]
  return (
    <section className="grid lg:grid-cols-3 lg:*:nth-1:col-span-3 gap-4 justify-center **:text-center">
      <header>
        <P variant="highlight" size="xs">
          Seu delivery de comida favorito
        </P>
        <H2>O que oferecemos</H2>
      </header>
      {features.map((feature) => (
        <div key={feature.id} className="*:mx-auto m-auto w-full max-w-[450px] nth-2:*:nth-1:p-6">
          {feature.svg}
          <H3>{feature.title}</H3>
          <P className="max-w-[80%]">{feature.desc}</P>
        </div>
      ))}
    </section>
  )
}
