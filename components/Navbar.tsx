'use client'
import React from "react";
import {Navbar as HeroNavbar, NavbarBrand, NavbarContent, NavbarItem, Link} from "@heroui/react";
import { useCipherAnimation } from "../hooks/useCipherAnimation";

const navLinks = [
  { href: '/home', text: 'Home' },
  { href: '/services', text: 'Services' },
  { href: '/portfolio', text: 'Portfolio' },
  { href: '/about', text: 'About' },
  { href: '/contact', text: 'Contact' },
  { href: '/skills', text: 'Skills' },
];

export default function Navbar() {
  const animatedLinks = useCipherAnimation(navLinks);
  return (
    <HeroNavbar maxWidth="full" isBordered className="bg-black/20" data-blur="true">
      <NavbarBrand>
        <p className="font-bold text-2xl text-blue-500">Dey Engineering</p>
      </NavbarBrand>
      <NavbarContent className="gap-10" justify="center">
        {navLinks.map((link, index) => (
            <NavbarItem key={link.href}>
                <Link color="foreground" href={link.href} className="hover:text-blue-500 transition-colors">
                    {animatedLinks[index]}
                </Link>
            </NavbarItem>
        ))}
      </NavbarContent>
    </HeroNavbar>
  );
}