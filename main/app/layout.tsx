import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import ThemeToggle from "./components/ThemeToggle";
import LanguageToggle from "./components/LanguageToggle";

export const metadata: Metadata = {
  title: "Yasamin Amini | Frontend Developer Portfolio",
  description:
    "Frontend developer specializing in React, TypeScript, and accessible web interfaces. Seeking LIA internship opportunities in Sweden from April 2026.",
  keywords: [
    "frontend developer",
    "React",
    "TypeScript",
    "web developer",
    "Sweden",
    "internship",
    "LIA",
  ],
  authors: [{ name: "Yasamin Amini" }],
  openGraph: {
    title: "Yasamin Amini | Frontend Developer",
    description:
      "Frontend developer building accessible, user-friendly web interfaces with React & TypeScript.",
    type: "website",
  },
  icons: {
    icon: "/character.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cute+Font&display=swap" rel="stylesheet" />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3XDCZH4KFM"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-3XDCZH4KFM');
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <LanguageProvider>
            <ThemeToggle />
            <main>{children}</main>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
