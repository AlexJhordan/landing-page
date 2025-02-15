import { IoBagHandle, IoFastFood, IoLogIn } from 'react-icons/io5'
import { iconLg } from '@/utils/sizes'
import { Button } from '@/components/Button'

export const Brand = () => (
  <Button asChild className="text-2xl text-cta" variant="minimal">
    <a href="#">
      <IoFastFood size={iconLg} aria-hidden />
      Foodeli
    </a>
  </Button>
)
