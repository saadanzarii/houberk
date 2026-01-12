"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import { Button } from "./ui/button";

export function HeroSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About us", link: "/" },
    { name: "Product & Services", link: "/" },
    { name: "Careers", link: "/" },
    { name: "Contact us", link: "/" },
  ];

  return (
    <section className="relative min-h-[80vh] w-full bg-[url('/hero.png')] bg-cover bg-center bg-no-repeat">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />

      {/* NAVBAR */}
      <nav className="relative z-20 flex items-center justify-between px-6 py-4 lg:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/logo.svg"
            alt="Company Logo"
            className="h-12 w-12 object-contain"
          />
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="text-white hover:text-white/80"
            >
              {item.name}
            </Link>
          ))}
        </div>
        {/* Desktop CTA */}
        {/* <Button
          variant="outline"
          className="hidden lg:inline-flex border-white bg-transparent text-white hover:bg-white hover:text-black"
        >
          Request a Quote
        </Button> */}
        <Button
          variant="outline"
          className="!hidden lg:!inline-flex border-white bg-transparent text-white hover:bg-white hover:text-black"
        >
          Request a Quote
        </Button>
        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="lg:hidden p-2 rounded-md"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <X size={22} className="text-white" />
          ) : (
            <Menu size={22} className="text-white" />
          )}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={clsx(
          "lg:hidden absolute top-[72px] left-10 right-10 z-30 bg-black/95 backdrop-blur-md transition-all duration-300 origin-top",
          isMobileMenuOpen
            ? "opacity-100 scale-y-100 pointer-events-auto"
            : "opacity-0 scale-y-0 pointer-events-none"
        )}
      >
        <ul className="flex flex-col items-center gap-6 px-6 py-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white text-lg"
              >
                {item.name}
              </Link>
            </li>
          ))}

          {/* Mobile CTA */}
          <Button
            variant="outline"
            className="mt-6 w-full border-white bg-white text-black "
          >
            Request a Quote
          </Button>
        </ul>
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-10 flex min-h-[600px] items-end px-6 pb-16 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <h1 className="text-4xl font-bold text-white md:text-5xl">
            Industrial Trading & Project Solutions for Businesses
          </h1>

          <div>
            <p className="max-w-lg text-white/90">
              We supply industrial equipment and manage technical projects so
              your business runs smoothly and avoids costly delays.
            </p>

            <Button className="mt-6 bg-white text-black hover:bg-transparent hover:text-white">
              Request a Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
