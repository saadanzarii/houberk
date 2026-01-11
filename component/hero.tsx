import { Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { instrumentSerif } from "@/app/layout";

export function HeroSection() {
  return (
    <section
      className="
    relative
    min-h-[80vh]
    w-full
    bg-[url('/hero.png')]
    bg-cover
    bg-center
    bg-no-repeat
  "
    >
      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-4 lg:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-14 w-14 items-center justify-center">
            <img
              src="../../logo.svg"
              alt="Company Logo"
              className="h-12 w-12 object-contain"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          <Link
            href="/"
            className={`text-md text-white hover:text-white/80 ${instrumentSerif.variable}`}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={`text-md text-white hover:text-white/80 ${instrumentSerif.variable}`}
          >
            About us
          </Link>
          <Link
            href="/services"
            className={`text-md text-white hover:text-white/80 ${instrumentSerif.variable}`}
          >
            Product & Services
          </Link>
          <Link
            href="/careers"
            className={`text-md text-white hover:text-white/80 ${instrumentSerif.variable}`}
          >
            Careers
          </Link>
          <Link
            href="/contact"
            className={`text-md text-white hover:text-white/80 ${instrumentSerif.variable}`}
          >
            Contact us
          </Link>
        </div>

        {/* CTA Button - Desktop */}
        <Button
          variant="outline"
          className={`hidden border-white-500 bg-transparent text-white hover:bg-white hover:text-black lg:inline-flex !rounded-md ${instrumentSerif.variable}`}
        >
          Request a Quote
        </Button>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className={`text-white lg:hidden ${instrumentSerif.variable}`}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </nav>

      {/* Hero Content */}
      {/* Hero Content */}
      <div className="relative z-10 flex justify-between min-h-[600px] lg:min-h-[700px] items-end px-6 pb-16 lg:px-12 lg:pb-10">
        <div className="grid w-full gap-8 lg:grid-cols-2 lg:grid-cols-[1fr_auto]  ">
          {/* Left Content */}
          <div>
            <h1
              className={`text-balance text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-5xl ${instrumentSerif.variable}`}
            >
              Industrial Trading & Project Solutions for Businesses
            </h1>
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-end lg:items-start ">
            <p
              className={`max-w-lg text-pretty text-white/90 lg:text-start  ${instrumentSerif.variable}`}
            >
              We supply industrial equipment and manage technical projects so
              your business runs smoothly, stays on schedule, and avoids costly
              delays.
            </p>

            <Button
              variant="outline"
              className="mt-6 w-fit rounded-3xl border-white bg-white text-black hover:bg-transparent hover:text-white !rounded-md "
            >
              Request a Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
