import { Poppins, Courgette, Sriracha } from 'next/font/google'

export const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-poppins',
})
export const corugette = Courgette({
  weight: ['400'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-corugette',
})
export const sriracha = Sriracha({
  weight: ['400'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-sriracha',
})
