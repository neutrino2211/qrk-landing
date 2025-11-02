import type { Metadata } from "next";
import { ThemeProvider } from "@/lib/theme";
import "@/styles/globals.css";
import { Header } from "@/components/header";
import { PostHogProvider } from "@/components/PostHogProvider";

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
        <PostHogProvider>
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

          <footer>
            <div className="flex h-16 items-center justify-center">
              <p className="text-sm text-gray-500">
                QRK | Tech For Humanity | 2025
              </p>
            </div>
          </footer>
        </PostHogProvider>
      </body>
    </html>
  );
}
