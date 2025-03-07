import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import SignOutButton from "./SignOut.Button";
import Link from "next/link";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: <CalendarDaysIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Guest profile",
    href: "/account/profile",
    icon: <UserIcon className="h-5 w-5 text-primary-600" />,
  },
];

const SideNavigation: React.FC = () => {
  return (
    <nav className="border-r border-primary-900">
      <ul className="flex flex-col gap-2 h-full text-lg">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="flex items-center gap-4 py-3 px-5 font-semibold text-primary-200 
                   hover:bg-primary-900 hover:text-primary-100 transition-colors w-full"
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          </li>
        ))}
        <div className="flex-grow"></div>

        <li className="mt-auto">
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
};

export default SideNavigation;
