import { IoFastFood } from 'react-icons/io5'
import { Button } from '@/components/Button'

export const Brand = () => (
  <Button asChild className="text-cta" variant="minimal">
    <h2>
      <a href="#" aria-label="Ir parar home" className="flex items-center justify-center gap-1">
        <IoFastFood className="size-[35px] xs:size-[40px]" />
        <span className="hidden xs:block sm:text-2xl text-lg">Foodeli</span>
      </a>
    </h2>
  </Button>
)
