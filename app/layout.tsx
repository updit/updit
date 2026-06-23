import type { Metadata } from "next";
import { Geist, Geist_Mono, Zen_Kaku_Gothic_New } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const zenKaku = Zen_Kaku_Gothic_New({
  variable: "--font-zen-kaku",
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "updit — Web Apps, Localization, and Creative Problem Solving",
  description:
    "Generalist by nature. Web app creator, English–Japanese localizer, and fixer of things.",
  metadataBase: new URL("https://updit.co"),
  openGraph: {
    title: "updit — Web Apps, Localization, and Creative Problem Solving",
    description:
      "Generalist by nature. Web app creator, English–Japanese localizer, and fixer of things.",
    url: "https://updit.co",
    siteName: "updit",
    images: [
      {
        url: "/up_og.png",
        width: 1200,
        height: 630,
        alt: "updit",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "updit — Web Apps, Localization, and Creative Problem Solving",
    description:
      "Generalist by nature. Web app creator, English–Japanese localizer, and fixer of things.",
    images: ["/up_og.png"],
  },
  icons: {
    icon: [
      { url: "/up16.png", sizes: "16x16", type: "image/png" },
      { url: "/up48.png", sizes: "48x48", type: "image/png" },
      { url: "/up192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/up192.png",
  },
  verification: {
    google: "LgM42nwsCkVUsNRnSR1xc3oQTJRXIuYiKhaP34N5E1A",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${zenKaku.variable} h-full antialiased`}
    >
      <body className={`min-h-full flex flex-col ${zenKaku.className}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
