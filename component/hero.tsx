import { Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { instrumentSerif } from "@/app/layout";

export function HeroSection() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[500px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="../../hero.png"
          alt="Industrial cargo ship at port"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-transparent" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-4 lg:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center">
            <img
              src="../../logo.svg"
              alt="Company Logo"
              className="h-8 w-8 object-contain"
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
          className={`hidden border-white bg-transparent text-white hover:bg-white hover:text-foreground lg:inline-flex ${instrumentSerif.variable}`}
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
      <div className="relative z-10 flex min-h-[600px] items-center px-6 lg:px-12">
        <div className="grid w-full gap-8 lg:grid-cols-2">
          {/* Left Content */}
          <div className="max-w-xl">
            <h1
              className={`text-balance text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-5xl ${instrumentSerif.variable}`}
            >
              Industrial Trading & Project Solutions for Businesses
            </h1>
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-start lg:items-end">
            <p
              className={`max-w-md text-pretty text-white/90 lg:text-right ${instrumentSerif.variable}`}
            >
              We supply industrial equipment and manage technical projects so
              your business runs smoothly, stays on schedule, and avoids costly
              delays.
            </p>
            <Button
              variant="outline"
              className="mt-6 w-fit border-white bg-transparent text-white hover:bg-white hover:text-foreground"
            >
              Request a Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
