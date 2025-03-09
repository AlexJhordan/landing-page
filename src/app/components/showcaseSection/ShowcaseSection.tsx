import { LeftSide } from './components/LeftSide'
import { RightSide } from './components/RightSide'

export const ShowcaseSection = () => {
  return (
    <section className="flex flex-col lg:justify-around lg:flex-row gap-8">
      <LeftSide />
      <RightSide />
    </section>
  )
}
