import Link from "next/link";
import Image from "next/image";
import NavItems from "./NavItems";
import { NAV_ITEMS } from "@/lib/constants";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const avatarUrl = "/assets/images/logo.png";
const logoutHref = "/";
const menuItemClassName =
  "hover:!bg-gray-900 focus:!bg-gray-900 data-[highlighted]:!bg-gray-900 data-[highlighted]:!text-yellow-500";
const menuLinkClassName =
  "cursor-pointer hover:!bg-gray-900 hover:text-yellow-500 focus:!bg-gray-900 focus:text-yellow-500";

const Header = () => {
  return (
    <header className="sticky top-0 header">
      <div className="container header-wrapper">
        <Link href="/">
          <Image
            src="/assets/icons/logo.svg"
            alt="Signalist logo"
            width={140}
            height={32}
            className="h-8 w-auto cursor-pointer"
          />
        </Link>
        <nav className="hidden justify-self-center sm:block">
          <NavItems />
        </nav>

        <DropdownMenu>
          <DropdownMenuTrigger
            className="justify-self-end rounded-full outline-none focus:outline-none focus:ring-0"
            aria-label="Open profile menu"
          >
            <Image
              src={avatarUrl}
              alt="Profile"
              width={40}
              height={40}
              className="size-10 rounded-full border border-gray-600 object-cover"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="min-w-40 border-gray-600 bg-gray-800 text-gray-400"
          >
            {NAV_ITEMS.map(({ href, label }) => (
              <DropdownMenuItem
                key={href}
                asChild
                className={`${menuItemClassName} sm:hidden`}
              >
                <Link href={href} className={menuLinkClassName}>
                  {label}
                </Link>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator className="bg-gray-600 sm:hidden" />
            <DropdownMenuItem asChild className={menuItemClassName}>
              <Link href={logoutHref} className={menuLinkClassName}>
                Logout
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};
export default Header;
