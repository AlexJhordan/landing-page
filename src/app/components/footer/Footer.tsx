import { H3, P } from "@/components/Typography"
import { Brand } from "../header/components/Brand"
import { Button } from "@/components/ui/button"
import { FaInstagram, FaXTwitter, FaFacebookF, FaPaperPlane } from "react-icons/fa6"
import { Input } from "@/components/ui/input"

const social = [
  {
    name: "Instagram",
    icon: <FaInstagram />,
    href: "https://www.instagram.com",
  },
  {
    name: "Facebook",
    icon: <FaFacebookF />,
    href: "https://www.facebook.com",
  },
  {
    name: "Twitter",
    icon: <FaXTwitter />,
    href: "https://x.com",
  },
]

const footerLinks = [
  {
    label: "Sobre",
    links: [
      { label: "Sobre nós", href: "#" },
      { label: "Recursos", href: "#" },
      { label: "Notícias", href: "#" },
      { label: "Cardápio", href: "#" },
    ],
  },
  {
    label: "Empresa",
    links: [
      { label: "Por que a Foodeli?", href: "#" },
      { label: "Parceria conosco", href: "#" },
      { label: "FAQ", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    label: "Suporte",
    links: [
      { label: "Conta", href: "#" },
      { label: "Central de suporte", href: "#" },
      { label: "Feedback", href: "#" },
      { label: "Fale conosco", href: "#" },
      { label: "Acessibilidade", href: "#" },
    ],
  },
]

export const Footer = () => {
  return (
    <footer className="w-full hidden xs:grid gap-4 lg:grid-cols-[1fr_3fr] p-4 sm:px-[5%]">
      <div className="flex flex-col gap-4">
        <Brand />
        <P>
          Nosso trabalho é encher sua barriga com comida deliciosa, com entrega rápida e gratuita!
        </P>
        <div className="flex gap-4">
          {social.map((social, i) => (
            <Button key={i} asChild variant="ghost" className="text-primary">
              <a href={social.href}>{social.icon}</a>
            </Button>
          ))}
        </div>
      </div>

      <nav className="grid gap-4 grid-cols-3 lg:grid-cols-4">
        {footerLinks.map((link, i) => (
          <div key={i}>
            <H3 className="mb-1">{link.label}</H3>
            <ul className="flex flex-col gap-2 items-start">
              {link.links.map((link, i) => (
                <Button variant="link" key={i} asChild className="text-foreground p-0">
                  <a href={link.href}>{link.label}</a>
                </Button>
              ))}
            </ul>
          </div>
        ))}

        <div className="flex flex-col items-center lg:items-start gap-4 col-span-3 lg:col-span-1">
          <H3 className="mb-1">Entre em contato</H3>
          <div className="flex gap-4 lg:flex-col lg:gap-2">
            <p>Dúvidas ou feedback?</p>
            <p>Adoraríamos ouvir você</p>
          </div>
          <form className="flex gap-2 w-full max-w-1/2 lg:max-w-full">
            <Input type="text" placeholder="Escreva sua mensagem" />
            <Button size="icon">
              <FaPaperPlane />
            </Button>
          </form>
        </div>
      </nav>
    </footer>
  )
}
