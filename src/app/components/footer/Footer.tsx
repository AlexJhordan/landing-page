import { Button } from '@/components/ui/button'
import { FaInstagram, FaXTwitter, FaFacebookF, FaPaperPlane } from 'react-icons/fa6'
import { Input } from '@/components/ui/input'
import { IconShoppingCart } from '@tabler/icons-react'
import { navRoutes } from '@/constants/routes'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { IoChevronDown } from 'react-icons/io5'

const social = [
  {
    name: 'Instagram',
    icon: <FaInstagram />,
    href: 'https://www.instagram.com',
  },
  {
    name: 'Facebook',
    icon: <FaFacebookF />,
    href: 'https://www.facebook.com',
  },
  {
    name: 'Twitter',
    icon: <FaXTwitter />,
    href: 'https://x.com',
  },
]

const footerLinks = [
  {
    label: 'Sobre',
    links: [
      { label: 'Sobre nós', href: '#' },
      { label: 'Recursos', href: '#' },
      { label: 'Notícias', href: '#' },
      { label: 'Cardápio', href: '#' },
    ],
  },
  {
    label: 'Empresa',
    links: [
      { label: 'Por que a Foodeli?', href: '#' },
      { label: 'Parceria conosco', href: '#' },
      { label: 'FAQ', href: '#' },
      { label: 'Blog', href: '#' },
    ],
  },
  {
    label: 'Suporte',
    links: [
      { label: 'Conta', href: '#' },
      { label: 'Central de suporte', href: '#' },
      { label: 'Feedback', href: '#' },
      { label: 'Fale conosco', href: '#' },
      { label: 'Acessibilidade', href: '#' },
    ],
  },
]

export const Footer = () => {
  return (
    <footer className="w-full grid gap-4 lg:grid-cols-[1fr_2fr] p-4 sm:px-[5%]">
      <div className="flex flex-col gap-4">
        <Button asChild variant="ghost" className="w-fit !px-0">
          <a href={navRoutes.home}>
            <IconShoppingCart className="lg:size-8 size-6" />
            <span className="text-lg lg:text-2xl">Foodeli</span>
          </a>
        </Button>
        <p>
          Nosso trabalho é encher sua barriga com comida deliciosa, com entrega rápida e gratuita!
        </p>
        <div className="flex gap-4">
          {social.map((social, i) => (
            <Button key={i} asChild variant="ghost" className="text-primary">
              <a href={social.href}>{social.icon}</a>
            </Button>
          ))}
        </div>
      </div>

      <nav className="hidden lg:grid gap-4 grid-cols-2 lg:grid-cols-4">
        {footerLinks.map((link, i) => (
          <div key={i}>
            <h3 className="mb-1 text-lg lg:text-2xl font-semibold">{link.label}</h3>
            <ul className="flex flex-col gap-2 items-start">
              {link.links.map((link, i) => (
                <Button variant="link" key={i} asChild className="text-foreground p-0">
                  <a href={link.href}>{link.label}</a>
                </Button>
              ))}
            </ul>
          </div>
        ))}

        <div className="flex flex-col items-center lg:items-start gap-4 col-span-2 lg:col-span-1">
          <h3 className="mb-1 text-lg lg:text-2xl font-semibold">Entre em contato</h3>
          <div className="flex gap-4 lg:flex-col lg:gap-2">
            <p>Dúvidas ou feedback?</p>
            <p>Adoraríamos ouvir você</p>
          </div>
          <form className="flex gap-2 w-full max-w-1/2 lg:max-w-full">
            <Input type="text" placeholder="Escreva sua mensagem" />
            <Button size="icon">
              <FaPaperPlane className="mr-0.5" />
            </Button>
          </form>
        </div>
      </nav>
      <FooterMobilie />
    </footer>
  )
}

const FooterMobilie = () => (
  <Accordion type="multiple" asChild>
    <nav className="lg:hidden space-y-4">
      <div className="flex flex-col items-start gap-2">
        <h3 className="mb-1 text-lg font-semibold">Entre em contato</h3>
        <div className="space-y-1">
          <p>Dúvidas ou feedback?</p>
          <p>Adoraríamos ouvir você</p>
        </div>
        <form className="flex gap-2 w-full ">
          <Input type="text" placeholder="Escreva sua mensagem" />
          <Button size="icon">
            <FaPaperPlane className="mr-0.5" />
          </Button>
        </form>
      </div>
      {footerLinks.map((item, i) => (
        <AccordionItem value={`item-${i}`} key={i} className="border-b-0">
          <AccordionTrigger className="text-xl py-3 flex items-center justify-between gap-1">
            {item.label}
            <IoChevronDown className="group-[data-state=open]:rotate-180 mb-1" />
          </AccordionTrigger>
          <AccordionContent asChild>
            <ul className="flex flex-col items-start">
              {item.links.map((link, i) => (
                <Button variant="link" key={i} asChild className="text-foreground p-0">
                  <a href={link.href}>{link.label}</a>
                </Button>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </nav>
  </Accordion>
)
