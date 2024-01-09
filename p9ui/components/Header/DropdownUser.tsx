import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import * as Icons from "@heroicons/react/24/outline";

interface UserSidebarProps {
  href: string;
  title: string;
  Icon?: any
}

function UserSidebarItem({ href, title, Icon }: UserSidebarProps) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
    >
      {Icon && (
        <Icon className="h-5.5 w-5.5 text-blue-500" />
      )}
      {title}
    </Link>
  );
}

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef<any>(null);
  const dropdown = useRef<any>(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="relative">
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        href="#"
      >
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-black dark:text-white">
            Thomas Anree
          </span>
          <span className="block text-xs">UX Designer</span>
        </span>

        <span className="h-12 w-12 rounded-full">
          <Image
            width={112}
            height={112}
            src={"/images/user/user-01.png"}
            alt="User"
          />
        </span>

        <Icons.ChevronDownIcon className={`text-blue-500 w-4 h-4 hidden sm:block`} />

      </Link>

      {/* <!-- Dropdown Start --> */}
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ${dropdownOpen === true ? "block" : "hidden"
          }`}
      >
        <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-7.5 dark:border-strokedark">
          <li>
            <UserSidebarItem
              href="/profile"
              title="My Profile"
              Icon={Icons.UserIcon}
            />
          </li>
          <li>
            <UserSidebarItem
              href="#"
              title="My Contacts"
              Icon={Icons.UserGroupIcon}
            />
          </li>
          <li>
            <UserSidebarItem
              href="/pages/settings"
              title="Account Settings"
              Icon={Icons.Cog8ToothIcon}
            />
          </li>
        </ul>
        <button className="flex items-center gap-3.5 py-4 px-6 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base">
          <Icons.ArrowLeftStartOnRectangleIcon className="h-5.5 w-5.5 text-blue-500" />
          Log Out
        </button>
      </div>
      {/* <!-- Dropdown End --> */}
    </div>
  );
};

export default DropdownUser;
