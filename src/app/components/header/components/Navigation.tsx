import { Link } from "@/components/Button"
import { Dropdown, DropdownContent, DropdownItems, DropdownItem, DropdownTrigger } from "@/components/Dropdown"
import { IoMenu } from "react-icons/io5"

export const DesktopNavigation = () => {
  return (
    <ul className="hidden lg:flex gap-2 items-center">
      <li>
        <Dropdown>
          <DropdownTrigger chevronIcon>Serviçoss</DropdownTrigger>
          <DropdownContent className="top-[calc(100%+4px)]">
            <DropdownItems>
              <DropdownItem>Item 1</DropdownItem>
              <DropdownItem>Item 2</DropdownItem>
              <DropdownItem>Item 3</DropdownItem>
            </DropdownItems>
          </DropdownContent>
        </Dropdown>
      </li>
      <li>
        <Dropdown>
          <DropdownTrigger chevronIcon>Menu</DropdownTrigger>
          <DropdownContent className="top-[calc(100%+4px)]">
            <DropdownItems>
              <DropdownItem>Item 1</DropdownItem>
              <DropdownItem>Item 2</DropdownItem>
              <DropdownItem>Item 3</DropdownItem>
            </DropdownItems>
          </DropdownContent>
        </Dropdown>
      </li>
      <li className="whitespace-nowrap">
        <Link variant="scale">Porque Foodeli?</Link>
      </li>
      <li>
        <Link variant="scale">Contact</Link>
      </li>
    </ul>
  )
}
export const MobileNavigation = () => {
  return (
    <Dropdown className="lg:hidden">
      <DropdownTrigger>
        <IoMenu />
      </DropdownTrigger>
      <DropdownContent className="top-[calc(100%+4px)]">
        <DropdownItems>
          <DropdownItem>Item 1</DropdownItem>
          <DropdownItem>Item 2</DropdownItem>
          <DropdownItem>Item 3</DropdownItem>
        </DropdownItems>
      </DropdownContent>
    </Dropdown>
  )
}
