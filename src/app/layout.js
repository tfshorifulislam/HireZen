import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "HireZen",
    template: "%s | HireZen",
  },
  description:
    "HireZen is a modern platform for jobs, products, and digital solutions built for the future.",
  keywords: [
    "HireZen",
    "jobs platform",
    "startup",
    "web development",
    "freelance",
    "tech jobs",
    "remote jobs",
  ],
  authors: [{ name: "HireZen Team" }],
  creator: "HireZen",
  metadataBase: new URL("https://your-domain.com"),

  openGraph: {
    title: "HireZen",
    description:
      "A modern platform for jobs, products, and digital solutions.",
    url: "https://your-domain.com",
    siteName: "HireZen",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NewXen Preview",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "HireZen",
    description:
      "A modern platform for jobs, products, and digital solutions.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
