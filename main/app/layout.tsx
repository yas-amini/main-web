import type { Metadata } from "next";
import "./globals.css";

import Script from "next/script";

export const metadata: Metadata = {
  title: "Portfolio | Yasamin Amini 🚀",
  description: "Web developer",
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
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

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
        <main>{children}</main>
      </body>
    </html>
  );
}
