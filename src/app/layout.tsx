// src/app/layout.tsx
// * root layout w/ fonts, analytics & global styling

import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "~/styles/animations.css";
import "~/styles/design-tokens.css";
import "~/styles/globals.css";
import "~/styles/themes.css";
import { ThemeSelector } from "~/components/display/ThemeSelector";
import { ThemeProvider } from "~/components/theme-provider";
import { VERSION } from "~/utils/version";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Garrett Fincke",
  description: "Full-stack software engineer portfolio for Garrett Fincke",
  generator: `Next.js v${VERSION}`,
  other: {
    version: VERSION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 
{
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--bg)] text-[var(--fg)]`}
      >
        <ThemeProvider>
          {children}
          <ThemeSelector />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
