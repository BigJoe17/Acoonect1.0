import React, { useState } from "react";
import {
  Menu,
  X,
  User,
  LogOut,
  LogIn,
  Home,
  Book,
  Users,
  MessageSquare,
} from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./extra/Logo";

interface NavBarProps {
  isLoggedIn: boolean;
}

interface NavItemProps {
  to: string;
  isMobile?: boolean;
  className?: string;
  children: React.ReactNode;
}

const NavBar: React.FC<NavBarProps> = ({ isLoggedIn }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const NavItem: React.FC<NavItemProps> = ({
    to,
    className,
    children,
    isMobile = false,
  }) => (
    <Link
      to={to}
      onClick={isMobile ? toggleMenu : undefined}
      className={`text-gray-800  hover:bg-gray-500 last-of-type:hover:bg-gray-800 hover:text-white ${
        isMobile ? "block px-3 py-2 text-base" : "px-3 py-2 text-sm"
      } rounded-md font-medium flex ${className}`}
    >
      {children}
    </Link>
  );

  const menuItems = isLoggedIn
    ? [
        { to: "/feed", label: "Feed", icon: Home },
        { to: "/servers", label: "Servers", icon: Users },
        { to: "/resources", label: "Resources", icon: Book },
        { to: "/messages", label: "Messages", icon: MessageSquare },
        { to: "/profile", label: "Profile", icon: User },
        { to: "/logout", label: "Logout", icon: LogOut },
      ]
    : [
        { to: "/", label: "Home", icon: Home },
        { to: "/signup", label: "Register", icon: LogIn },
      ];

  return (
    <nav className="bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Logo />
        <div className="hidden md:flex space-x-4 last:!bg-gray-800">
          {menuItems.map((item) => (
            <NavItem
              key={item.to}
              to={item.to}
              className={
                item.label === "Logout" || item.label === "Register"
                  ? "bg-gray-800 text-white"
                  : ""
              }
            >
              <item.icon className="inline-block mr-1" size={18} /> {item.label}
            </NavItem>
          ))}
        </div>
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md text-gray-800 hover:text-white hover:bg-gray-700 focus:outline-none "
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1">
          {menuItems.map(({ to, label, icon: Icon }) => (
            <NavItem key={to} to={to} isMobile>
              <Icon className="inline-block mr-2" size={18} /> {label}
            </NavItem>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
