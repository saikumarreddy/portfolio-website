import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sai Kumar Reddy | Senior Full Stack Java Developer",
  description: "Senior Full Stack Java Developer with 6+ years of experience building scalable enterprise applications. Specialist in Microservices, Spring Boot, React, and AWS.",
  authors: [{ name: "Sai Kumar Reddy" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saireddy.dev", // Placeholder
    title: "Sai Kumar Reddy | Senior Full Stack Java Developer",
    description: "Senior Full Stack Java Developer with 6+ years of experience building scalable enterprise applications.",
    siteName: "Sai Kumar Reddy Portfolio",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon.png" />
      </head>
      <body
        className={`${inter.variable} ${firaCode.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
