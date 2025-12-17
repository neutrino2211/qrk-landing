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

          <footer className="border-t border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 md:px-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-8">
                <p className="text-sm text-muted-foreground font-light">
                  QRK | Tech For Humanity | 2025
                </p>
                <div className="flex items-center gap-6">
                  <a
                    href="https://github.com/qrk-tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href="mailto:hello@qrk.ng"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </PostHogProvider>
      </body>
    </html>
  );
}
