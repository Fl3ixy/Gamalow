import React from "react";
import Link from "next/link";
import {
  Box,
  Mail,
  MessageSquare,
  Twitter,
  Github,
  Heart,
  Code,
  Palette,
  Gamepad2,
  Instagram,
  InstagramIcon,
  Building,
  BoxIcon,
  Triangle,
  Search,
  HandPlatter,
  Contact,
  User,
} from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/pricing", label: "Prices" },
    { href: "/contact", label: "Contact" },
  ];

  const services = [
    { icon: Building, label: "Building" },
    { icon: BoxIcon, label: "3D modeling" },
    { icon: Palette, label: "Texturing" },
    { icon: Triangle, label: "Optimization" },
  ];

  const socialLinks = [
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://x.com/GamaLow_Off",
      color: "hover:text-blue-400",
    },
    {
      icon: InstagramIcon,
      label: "Instagram",
      href: "https://www.instagram.com/3d.work.andy",
      color: "hover:text-pink-300",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:gamalow32@gmail.com",
      color: "hover:text-green-400",
    },
  ];

  return (
    <footer className="bg-zinc-950/40 border-t border-zinc-800/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 md:gap-12 md:text-left text-center">
          {/* Logo & Description */}
          <div className="lg:col-span-1 md:text-left text-center">
            <Link
              href="/"
              className="flex items-center space-x-3 mb-6 group md:justify-start justify-center"
            >
              <div className="bolt-card p-3 rounded-xl">
                <Image
                  src="/Pictures/Gamalow.png"
                  alt="Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="text-2xl font-bold text-white">Gamalow</span>
                <p className="text-sm text-zinc-400">3D Artist & Builder</p>
              </div>
            </Link>
            <p className="text-zinc-400 leading-relaxed mb-6 hidden md:block">
              Creator of immersive 3D worlds and unique Roblox experiences.
              Specialized in building and 3D modeling
            </p>
            <div className="flex space-x-4 md:justify-start justify-center">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bolt-card p-3 rounded-lg transition-all duration-300 ${social.color} group`}
                  >
                    <Icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation Rapide */}
          <div className="hidden md:block">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center">
              <div className="bolt-card p-2 rounded-lg mr-3">
                <div className="w-4 h-4 rounded text-xs flex items-center justify-center text-white font-bold">
                  <Search className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-white" />
                </div>
              </div>
              Navigation
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <div className="w-2 h-2 bg-yellow-400/50 rounded-full mr-3 group-hover:bg-yellow-400 transition-colors"></div>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="hidden lg:block">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center">
              <div className="bolt-card p-2 rounded-lg mr-3">
                <div className="w-4 h-4 rounded text-xs flex items-center justify-center text-white font-bold">
                  <HandPlatter className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-white" />
                </div>
              </div>
              Services
            </h3>
            <ul className="space-y-4">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <li
                    key={index}
                    className="flex items-center text-zinc-400 group"
                  >
                    <Icon className="h-4 w-4 mr-3 text-yellow-400 group-hover:scale-110 transition-transform" />
                    {service.label}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="hidden lg:block">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center">
              <div className="bolt-card p-2 rounded-lg mr-3">
                <div className="w-4 h-4 rounded text-xs flex items-center justify-center text-white font-bold">
                  <User className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-white" />
                </div>
              </div>
              Contact
            </h3>
            <div className="space-y-4">
              <div className="bolt-card p-4 rounded-lg">
                <p className="text-sm text-zinc-400 mb-2">Professional Email</p>
                <a
                  href="mailto:contact@alexvortex.com"
                  className="text-yellow-400 hover:text-yellow-300 transition-colors font-medium"
                >
                  gamalow32@gmail.com
                </a>
              </div>
              <div className="bolt-card p-4 rounded-lg">
                <p className="text-sm text-zinc-400 mb-2">Availability</p>
                <p className="text-white font-medium">
                  UTC+1
                </p>
              </div>
              <div className="bolt-card p-4 rounded-lg">
                <p className="text-sm text-zinc-400 mb-2">Average Response</p>
                <p className="text-green-400 font-medium">
                  &lt; 48h guaranteed
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div className="flex items-center space-x-2 text-zinc-400 mb-4 md:mb-0 justify-center md:justify-start">
              <span>© {currentYear} @Gamalow</span>
              <span className="hidden sm:inline">- Developed by</span>
              <span className="hidden sm:inline">@Realfl3ixy - Lohan</span>
            </div>
            <div className="items-center space-x-6 text-sm text-zinc-400 hidden md:flex">
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Confidentiality
              </Link>
              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Conditions
              </Link>
              <div className="flex items-center space-x-2">
                <span>2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
