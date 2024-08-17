import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  return (
    <Disclosure as="nav">
      {/* Desktop menu */}
      <div className="hidden sm:flex space-x-8 justify-end">
        <a href="#">Overview</a>
        <a href="#">Projects</a>
        <a href="#">About</a>
      </div>

      {/* Mobile menu button */}
      <div className="flex justify-end sm:hidden pb-4">
        <DisclosureButton className="group relative inline-flex items-center justify-center">
          <span className="absolute -inset-0.5" />
          <span className="sr-only">Open main menu</span>
          <Bars3Icon
            aria-hidden="true"
            className="block h-6 w-6 group-data-[open]:hidden"
          />
          <XMarkIcon
            aria-hidden="true"
            className="hidden h-6 w-6 group-data-[open]:block"
          />
        </DisclosureButton>
      </div>

      {/* Mobile menu */}
      <DisclosurePanel className="sm:hidden">
        <div className="flex flex-col space-y-4 items-end">
          <DisclosureButton as="a" href="/" className="block">
            Overview
          </DisclosureButton>
          <DisclosureButton as="a" href="/projects" className="block">
            Projects
          </DisclosureButton>
          <DisclosureButton as="a" href="/about" className="block">
            About
          </DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
