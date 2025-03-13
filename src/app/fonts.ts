import { Poppins, Courgette, Sriracha } from 'next/font/google'

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-poppins',
})
const corugette = Courgette({
  weight: ['400'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-corugette',
})
const sriracha = Sriracha({
  weight: ['400'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-sriracha',
})

export const fonts = [poppins.variable, corugette.variable, sriracha.variable].join(' ')
