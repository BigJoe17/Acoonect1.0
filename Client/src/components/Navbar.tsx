import React, { useState } from "react";
import {
  Menu,
  X,
  User,
  LogOut,
  LogIn,
  UserPlus,
  Home,
  Book,
  Users,
  MessageSquare,
} from "lucide-react";

interface NavBarProps {
  isLoggedIn: boolean;
}

interface NavItemProps {
  href: string;
  isMobile?: boolean;
  children: React.ReactNode;
}

const NavBar: React.FC<NavBarProps> = ({ isLoggedIn }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const NavItem: React.FC<NavItemProps> = ({
    href,
    children,
    isMobile = false,
  }) => (
    <a
      href={href}
      onClick={isMobile ? toggleMenu : undefined}
      className={`text-gray-300 hover:bg-gray-800 hover:text-white ${
        isMobile ? "block px-3 py-2 text-base" : "px-3 py-2 text-sm"
      } rounded-md font-medium`}
    >
      {children}
    </a>
  );

  const menuItems = isLoggedIn
    ? [
        { href: "/feed", label: "Feed", icon: Home },
        { href: "/servers", label: "Servers", icon: Users },
        { href: "/resources", label: "Resources", icon: Book },
        { href: "/messages", label: "Messages", icon: MessageSquare },
        { href: "/profile", label: "Profile", icon: User },
        { href: "/logout", label: "Logout", icon: LogOut },
      ]
    : [
        { href: "/", label: "Home", icon: Home },
        { href: "/login", label: "Login", icon: LogIn },
        { href: "/register", label: "Register", icon: UserPlus },
      ];

  return (
    <nav className="bg-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <span className="text-white text-xl font-bold">UniConnect</span>
        <div className="hidden md:flex space-x-4">
          {menuItems.map(({ href, label, icon: Icon }) => (
            <NavItem key={href} href={href}>
              <Icon className="inline-block mr-1" size={18} /> {label}
            </NavItem>
          ))}
        </div>
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1">
          {menuItems.map(({ href, label, icon: Icon }) => (
            <NavItem key={href} href={href} isMobile>
              <Icon className="inline-block mr-2" size={18} /> {label}
            </NavItem>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
