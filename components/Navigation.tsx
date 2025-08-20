"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Box,
  Home,
  User,
  DollarSign,
  MessageSquare,
  PackagePlus,
} from "lucide-react";
import Image from "next/image";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Toggle mobile menu and body class
  const toggleMobileMenu = useCallback(() => {
    setIsOpen(!isOpen);
    if (typeof window !== "undefined") {
      if (!isOpen) {
        document.body.classList.add("mobile-menu-open");
        document.body.classList.remove("mobile-menu-closed");
      } else {
        document.body.classList.add("mobile-menu-closed");
        document.body.classList.remove("mobile-menu-open");
      }
    }
  }, [isOpen]);

  // Close mobile menu
  const closeMobileMenu = useCallback(() => {
    setIsOpen(false);
    if (typeof window !== "undefined") {
      document.body.classList.add("mobile-menu-closed");
      document.body.classList.remove("mobile-menu-open");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    // Initialize body class
    if (typeof window !== "undefined") {
      document.body.classList.add("mobile-menu-closed");
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      // Cleanup body classes
      if (typeof window !== "undefined") {
        document.body.classList.remove(
          "mobile-menu-open",
          "mobile-menu-closed"
        );
      }
    };
  }, []);

  const isActive = (href: string) => pathname === href;

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about", label: "About", icon: User },
    { href: "/library", label: "Library", icon: PackagePlus },
    { href: "/pricing", label: "Pricing", icon: DollarSign },
    { href: "/contact", label: "Contact", icon: MessageSquare },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-950/40 backdrop-blur-sm border-b border-zinc-800/50"
          : "bg-zinc-950/40 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 group"
          >
            <div className="p-2 rounded-lg">
              <Image
                src="/Pictures/Gamalow.png"
                alt="Logo"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <span className="text-xl text-zinc-400 hover:text-white transition-all duration-200 bg-clip-text font-medium">
              Gamalow
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group flex items-center space-x-2 px-3 py-2 text-sm font-medium transition-all duration-200 ${
                      isActive(item.href)
                        ? "text-yellow-400"
                        : "text-zinc-400 hover:text-white"
                    }`}
                    style={{
                      textShadow: isActive(item.href)
                        ? "0 2px 8px rgba(255, 215, 0, 0.6), 0 0 16px rgba(255, 215, 0, 0.3)"
                        : "0 1px 3px rgba(0, 0, 0, 0.8)",
                    }}
                  >
                    <Icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800/50 focus:outline-none transition-all duration-200"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-950/40 backdrop-blur-sm border-b border-zinc-800/50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group flex items-center space-x-3 px-3 py-2 text-base font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? "text-yellow-400"
                      : "text-zinc-400 hover:text-white"
                  }`}
                  style={{
                    textShadow: isActive(item.href)
                      ? "0 2px 8px rgba(255, 215, 0, 0.6), 0 0 16px rgba(255, 215, 0, 0.3)"
                      : "0 1px 3px rgba(0, 0, 0, 0.8)",
                  }}
                  onClick={closeMobileMenu}
                >
                  <Icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
