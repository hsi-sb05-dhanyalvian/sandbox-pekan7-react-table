//- app/layout.tsx

import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import MainSidebar from "@/components/main-sidebar";
import MainFooter from "@/components/main-footer";
import "./globals.css";
import ReactQueryProvider from "./provider";

const fontSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fontMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AdminPanel",
  description: "Headless UI for building powerful tables & datagrids",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} ${fontMono.variable} antialiased`}>
        <ReactQueryProvider>
          <div className="flex min-h-screen">
            <MainSidebar />

            <div className="ml-64 p-6 w-full">
              <main className="flex-1">
                {children}
              </main>

              <MainFooter />
            </div>
          </div>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
