import { ShowcaseSection } from './components/showcaseSection/ShowcaseSection'
import { ServicesSection } from './components/servicesSection/ServicesSection'
import { MenuSection } from './components/menuSection/MenuSection '

export default function Home() {
  return (
    <main className="flex flex-col w-full gap-8 ">
      <ShowcaseSection />
      <ServicesSection />
      <MenuSection />
    </main>
  )
}
