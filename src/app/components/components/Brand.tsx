import { IoFastFood } from 'react-icons/io5'
import { iconLg } from '@/utils/iconSizes'
import { Button } from '@/components/Button'

export const Brand = () => (
  <Button asChild className="text-2xl text-cta" variant="minimal">
    <a href="#" aria-label="Ir parar home">
      <IoFastFood size={iconLg} aria-hidden />
      Foodeli
    </a>
  </Button>
)
