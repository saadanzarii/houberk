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
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/5" />

      {/* NAVBAR */}
      <nav className="relative z-20 flex items-center justify-between px-6 py-4 lg:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/logo.svg"
            alt="Company Logo"
            className="h-8 w-8 object-contain lg:h-12 lg:w-12"
          />
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="text-[#ffffff] !font-semibold hover:text-white/80"
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
          className="!hidden lg:!inline-flex !font-semibold !rounded-md border-white bg-transparent text-white hover:bg-white hover:text-black"
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
          "lg:hidden fixed top-0 left-0 z-40 h-screen w-[85%] max-w-sm bg-white shadow-xl transition-transform duration-300 ease-in-out",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <ul className="flex h-full flex-col pt-16">
          {navItems.map((item) => (
            <li key={item.name} className="border-b border-gray-200 px-6 py-4">
              <Link
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-lg font-medium text-black transition-colors hover:text-[#3EB6CC]"
              >
                {item.name}
              </Link>
            </li>
          ))}

          {/* Spacer */}
          <div className="flex-1" />

          {/* Mobile CTA */}
          <li className="px-6 pb-6">
            <Button className="w-full !rounded-md bg-black py-6 text-white font-semibold hover:bg-black/90">
              Request a Quote
            </Button>
          </li>
        </ul>
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-10 flex min-h-[650px] items-end px-6 pb-10 lg:px-12 ">
        <div className="grid gap-8 lg:grid-cols-2 ">
          <h1 className="self-center text-4xl font-bold text-white md:text-5xl lg:leading-14">
            Industrial Trading & Project Solutions for Businesses
          </h1>

          <div className="">
            <p className=" max-w-md text-[#C8D2D9] !font-medium ">
              We supply industrial equipment and manage technical projects so
              your business runs smoothly and avoids costly delays.
            </p>

            {/* <Button className="mt-6 !font-semibold sm:w-full bg-white text-black !rounded-md hover:bg-transparent hover:text-white hover:border">
              Request a Quote
            </Button> */}

            <Button
              className="mt-5 py-6 px-6 w-full lg:w-fit font-semibold
    bg-white
    text-black
    !rounded-md
    hover:bg-transparent
    hover:text-white
    hover:border
    
  "
            >
              Request a Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
