import type { Metadata } from 'next'
import { ThemeProvider } from "@/lib/theme";
import '@/styles/globals.css'
import { Header } from '@/components/header';

export const metadata: Metadata = {
  title: 'QRK Landing',
  description: 'QRK Landing Page',
  icons: {
    icon: [
      {
        url: '/pure-light.svg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/pure-dark.svg',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap" rel="stylesheet"/>
      </head>
      <body className='h-full w-full'>
        <div id="root" className="w-full h-full">
            <ThemeProvider>
              <Header links={[{label: 'Home', href: '/'}, {label: 'Team', href: '/team'}, {label: 'Mission', href: '/mission'}]} />
              {children}
            </ThemeProvider>
        </div>
      </body>
    </html>
  )
} 