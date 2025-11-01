"use client";

import Link from "next/link";
import Image from "next/image";
import { ThemeToggle, useTheme } from "@/lib/theme";

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
  const [light, dark] = logoPair();
  const gradient =
    theme === "light"
      ? "bg-gradient-to-b from-white"
      : "bg-gradient-to-b from-[#000]";
  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 flex items-center justify-between ${gradient} p-4`}
    >
      <div className="flex items-center gap-4">
        <Image
          src={theme === "light" ? light! : dark!}
          alt="QRK"
          width={40}
          height={40}
          className="h-10"
        />
        {page ? <h1 className="text-2xl">{page.toUpperCase()}</h1> : null}
      </div>
      <nav>
        {links.map((link) => (
          <Link
            className="hover:text-primary mx-2 text-sm font-light"
            href={link.href}
            key={link.label}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <ThemeToggle />
    </header>
  );
}
