import type { Metadata } from "next";
import { ThemeProvider } from "@/lib/theme";
import "@/styles/globals.css";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "QRK | Tech For Humanity",
  description:
    'QRK is a "tech for humanity" research startup from Abuja, Nigeria. Dedicated to using their skills to improve tech for the purpose of enhancing the human experience',
  icons: {
    icon: [
      {
        url: "/pure-light.svg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/pure-dark.svg",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="h-full w-full">
        <div id="root" className="h-full w-full">
          <ThemeProvider>
            <Header
              links={[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about-us" },
                { label: "Blog", href: "/blog" },
              ]}
            />
            {children}
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
