// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "StoryBit Streaming Dashboard",
  description: "A simple streaming dashboard clone built with Next.js 14",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="main-container">
        <Header />
        <main className="max-w-6xl mx-auto px-4 pb-10">{children}</main>
      </body>
    </html>
  );
}
