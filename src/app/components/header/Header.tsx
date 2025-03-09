import { Navigation } from './components/Navigation'
import { UserActions } from './components/UserActions'
import { Brand } from './components/Brand'

export const Header = () => {
  return (
    <header className="flex gap-2 w-full justify-between">
      <Brand />
      <Navigation />
      <UserActions />
    </header>
  )
}
