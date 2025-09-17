import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hello World - shadcn/ui App",
  description: "A simple hello world application built with shadcn/ui, Next.js 15, and React 19",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
