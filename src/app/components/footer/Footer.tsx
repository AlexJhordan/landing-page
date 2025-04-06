import { H3, P } from "@/components/Typography"
import { Button, Link } from "@/components/Button"
import { FaInstagram, FaXTwitter, FaFacebookF, FaPaperPlane } from "react-icons/fa6"
import { Brand } from "../header/Header"
import { Input } from "@/components/Input"

export const Footer = () => {
  return (
    <footer className="w-full hidden xs:grid gap-4 lg:grid-cols-[1fr_3fr]">
      <div className="flex flex-col gap-4">
        <Brand />
        <P>Nosso trabalho é encher sua barriga com comida deliciosa, com entrega rápida e gratuita!</P>
        <div className="flex gap-4 text-cta">
          <Link target="_blank" href="https://www.instagram.com">
            <FaInstagram />
          </Link>
          <Link target="_blank" href="https://www.facebook.com">
            <FaFacebookF />
          </Link>
          <Link target="_blank" href="https://x.com">
            <FaXTwitter />
          </Link>
        </div>
      </div>

      <nav className="grid grid-cols-4 gap-4 *:space-y-4 *:*:space-y-4">
        <div>
          <H3>Sobre</H3>
          <ul>
            <li>
              <Link>Sobre nós</Link>
            </li>
            <li>
              <Link>Recursos</Link>
            </li>
            <li>
              <Link>Notícias</Link>
            </li>
            <li>
              <Link>Cardápio</Link>
            </li>
          </ul>
        </div>

        <div>
          <H3>Empresa</H3>
          <ul>
            <li>
              <Link>Por que a Foodeli?</Link>
            </li>
            <li>
              <Link>Parceria conosco</Link>
            </li>
            <li>
              <Link>FAQ</Link>
            </li>
            <li>
              <Link>Blog</Link>
            </li>
          </ul>
        </div>

        <div>
          <H3>Suporte</H3>
          <ul>
            <li>
              <Link>Conta</Link>
            </li>
            <li>
              <Link>Central de suporte</Link>
            </li>
            <li>
              <Link>Feedback</Link>
            </li>
            <li>
              <Link>Fale conosco</Link>
            </li>
            <li>
              <Link>Acessibilidade</Link>
            </li>
          </ul>
        </div>

        <div>
          <H3>Entre em contato</H3>
          <p>Dúvidas ou feedback?</p>
          <p>Adoraríamos ouvir você</p>
          <form>
            <Input type="form" placeholder="Sua Mensagem">
              {/* <FaPaperPlane aria-label="Enviar mensagem" /> */}
            </Input>
          </form>
        </div>
      </nav>
    </footer>
  )
}
