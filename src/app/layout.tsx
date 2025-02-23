import './globals.css'
import type { Metadata } from 'next'
import { poppins, corugette, sriracha } from './fonts'
import { Header } from './components/Header'

export const metadata: Metadata = {
  title: 'Foodeli - Landing Page',
  description: 'Generated by create next app',
}
const fonts = `${poppins.variable} ${corugette.variable} ${sriracha.variable}`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" className={fonts}>
      <head>
        <>{/* <script crossOrigin="anonymous" src="//unpkg.com/react-scan/dist/auto.global.js" /> */}</>
      </head>
      <body className={`light flex flex-col items-start gap-4 p-4 sm:px-[5%]`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
