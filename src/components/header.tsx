"use client";

import Link from 'next/link'
import Image from 'next/image'
import { ThemeToggle, useTheme } from "@/lib/theme"

const isPalestineTime = () => typeof localStorage === 'object' && ((new Date().getMonth() == 9 && new Date().getDate() == 7) || localStorage.getItem("pstime"))
const logoPair = () => isPalestineTime() ? ['/mix-light.svg', '/mix-dark.svg'] : ['/pure-light.svg', '/pure-dark.svg']

export function Header({links, page}: {links: {label: string, href: string}[], page?: string}) {
    const { theme } = useTheme();
    const [light, dark] = logoPair();
    return (
        <header className="flex justify-between items-center p-4 fixed top-0 left-0 right-0 z-50">
            <div className="flex items-center gap-4">
                <Image
                    src={theme === 'light' ? light : dark}
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
                        className="text-sm font-light mx-2 hover:text-primary" 
                        href={link.href} 
                        key={link.label}
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>
            <ThemeToggle/>
        </header>
    )
}