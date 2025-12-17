"use client";

import Link from "next/link";
import Image from "next/image";
import { ThemeToggle, useTheme } from "@/lib/theme";
import { usePathname } from "next/navigation";

const isPalestineTime = () =>
  typeof localStorage === "object" &&
  ((new Date().getMonth() == 9 && new Date().getDate() == 7) ||
    localStorage.getItem("pstime"));
const logoPair = () =>
  isPalestineTime()
    ? ["/mix-light.svg", "/mix-dark.svg"]
    : ["/pure-light.svg", "/pure-dark.svg"];

export function Header({
  links,
  page,
}: {
  links: { label: string; href: string }[];
  page?: string;
}) {
  const { theme } = useTheme();
  const pathname = usePathname();
  const [light, dark] = logoPair();

  return (
    <header
      className="fixed top-0 right-0 left-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-8">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <Image
              src={theme === "light" ? light! : dark!}
              alt="QRK"
              width={40}
              height={40}
              className="h-10 w-10 transition-transform group-hover:scale-110"
            />
          </div>
          {page ? (
            <h1 className="text-xl font-light tracking-tight md:text-2xl">
              {page.toUpperCase()}
            </h1>
          ) : null}
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                className={`relative px-4 py-2 text-sm font-light transition-colors hover:text-primary ${
                  isActive ? "text-primary" : ""
                }`}
                href={link.href}
                key={link.label}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-8 -translate-x-1/2 rounded-full bg-primary" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Navigation */}
        <nav className="flex md:hidden items-center gap-2">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                className={`px-2 py-1 text-xs font-light transition-colors hover:text-primary ${
                  isActive ? "text-primary" : ""
                }`}
                href={link.href}
                key={link.label}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Theme Toggle */}
        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
