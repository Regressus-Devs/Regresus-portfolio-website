"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import GooeyNav from "@/components/GooeyNav";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button, buttonVariants } from "@/components/ui/button";

const items = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "Solutions", href: "#solutions" },
  { label: "Blog", href: "#blog" },
  { label: "About Us", href: "#about" },
];

type NavItem = (typeof items)[number];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 bg-transparent transition-[padding] duration-300 ${
        isScrolled ? "px-3 pt-3 lg:px-6" : "border-b"
      }`}
    >
      <nav
        className={`mx-auto flex w-full max-w-341.5 items-center justify-between border-border bg-background/95 px-6 backdrop-blur-sm transition-[height,border-radius,box-shadow,padding] duration-300 lg:px-12 ${
          isScrolled
            ? "h-14 rounded-full border px-4 shadow-lg shadow-black/20 lg:px-6"
            : "h-16"
        }`}
      >
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={128}
            height={32}
            className={`w-auto rounded-md transition-[height] duration-200 brightness-100 ${
              isScrolled ? "h-8" : "h-12"
            }`}
            style={{ filter: "invert(1)" }}
            preload
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <GooeyNav
            items={items}
            initialActiveIndex={0}
            theme="dark"
            color="#ffffff"
            activeTextColor="#000000"
            size="md"
            frame
            particleCount={15}
            spread={56}
            animationTime={600}
            timeVariance={300}
            gooeyness={0.5}
            wobble={0.5}
            hoverEffect
            style={{
              // "--gn-frame": "#242424",
              "--gn-frame": "#00000",
              "--gn-ink": "#ffffff",
              "--gn-muted": "rgba(255, 255, 255, 0.9)",
            }}
            onChange={(index: number, item: NavItem) =>
              console.log(index, item.label)
            }
          />
        </div>

        <div className="hidden md:block">
          <Link href="#contact" className={buttonVariants()}>
            Hire Us
          </Link>
        </div>

        {/* Mobile Nav */}

        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Open menu"
              />
            }
          >
            <MenuIcon />
          </SheetTrigger>

          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>

            <div className="flex flex-col gap-2 px-4">
              {items.map((item) => (
                <SheetClose
                  key={item.label}
                  nativeButton={false}
                  render={
                    <a
                      href={item.href}
                      className="rounded-md px-3 py-3 text-base hover:bg-muted"
                    />
                  }
                >
                  {item.label}
                </SheetClose>
              ))}

              <SheetClose
                nativeButton={false}
                render={
                  <a
                    href="#contact"
                    className="mt-4 rounded-md bg-primary px-3 py-3 text-center text-primary-foreground"
                  />
                }
              >
                Hire Us
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
