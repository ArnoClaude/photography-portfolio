import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  return (
    <Disclosure as="nav" className="sticky">
      {/* Desktop menu */}
      <div className="hidden sm:flex justify-between">
        <p className="font-serif">Arno Claude</p>
        <div className="sm:flex space-x-8 justify-en">
          <a href="/">Overview</a>
          <a href="/projects">Projects</a>
          <a href="/about">About</a>
        </div>
      </div>

      {/* Mobile menu button */}
      <div className="flex justify-between sm:hidden">
        <p className="font-serif">Arno Claude</p>
        <div className="flex justify-end">
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
      </div>

      {/* Mobile menu */}
      <DisclosurePanel className="sm:hidden">
        <div className="flex flex-col space-y-4 items-end">
          <DisclosureButton as="a" href="/" className="block mt-4">
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
