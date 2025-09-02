//- app/layout.tsx

import type { Metadata } from "next";
import { Roboto_Flex, Roboto_Mono } from "next/font/google";
import MainSidebar from "@/components/main-sidebar";
import MainFooter from "@/components/main-footer";
import ReactQueryProvider from "./provider";
import { getMetaPageDesc, getMetaPageTitle } from "@/libs/meta";
import "./globals.css";

const fontSans = Roboto_Flex({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: getMetaPageTitle('Dashboard'),
  description: getMetaPageDesc(),
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
          <div className="main flex min-h-screen">
            <MainSidebar />

            <div className="ml-64 px-6 py-4 w-full flex flex-col min-h-screen">
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
