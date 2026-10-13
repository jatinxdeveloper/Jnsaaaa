import type { Metadata, Viewport } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#032b17",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://jnsaaaa.com"),
  title: "JNSAAAA Recycle Private Limited | Industrial Recycling",
  description:
    "Connecting recyclable materials, machinery components, and businesses through practical material recovery and onward supply.",
  keywords: [
    "JNSAAAA Recycle Private Limited",
    "Industrial Recycling India",
    "Electronic Scrap Recovery",
    "Used Electrical Motors",
    "Copper Metal Recycling",
    "Industrial Machinery Parts Recovery",
    "Material Recovery Ghaziabad Muradnagar",
    "B2B Industrial Scrap",
  ],
  authors: [{ name: "JNSAAAA RECYCLE PRIVATE LIMITED" }],
  openGraph: {
    title: "JNSAAAA Recycle Private Limited | Industrial Recycling",
    description:
      "Connecting recyclable materials, machinery components, and businesses through practical material recovery and onward supply.",
    url: "https://jnsaaaa.com",
    siteName: "JNSAAAA Recycle Private Limited",
    images: [
      {
        url: "/images/hero-industrial.jpg",
        width: 1200,
        height: 630,
        alt: "JNSAAAA Industrial Recycling & Material Recovery Operations",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/apple-icon.png",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${urbanist.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-white text-[#121814] font-sans selection:bg-[#25a244] selection:text-white flex flex-col">
        {children}
      </body>
    </html>
  );
}
