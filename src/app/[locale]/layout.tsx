import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css"
import { Cursor } from "@/components/cursor";
import Navbar from "@/components/modules/layout/navbar";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CyberTankz",
  description: "2017-2020 tanks version",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();

  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <Cursor />
          <Navbar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
