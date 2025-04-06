import "./globals.css"
import { Header } from "./components/header/Header"
import { Footer } from "./components/footer/Footer"
import { fonts } from "./fonts"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" className={fonts + " dark"}>
      <body id="home" className="flex flex-col bg-background gap-15 p-4 sm:px-[5dvw] xl:px-[10dvw]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
