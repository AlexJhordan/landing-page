import { Navigation } from "./components/Navigation"
import { UserActions } from "./components/UserActions"
import { Brand } from "./components/Brand"

export const Header = () => {
  return (
    <header className="flex gap-2 w-full justify-between p-4 sm:px-[5%]">
      <Brand />
      <Navigation />
      <UserActions />
    </header>
  )
}
