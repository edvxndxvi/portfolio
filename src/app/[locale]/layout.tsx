import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import { NextIntlClientProvider } from "next-intl";
import {getMessages} from 'next-intl/server';

import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { config } from '@fortawesome/fontawesome-svg-core'

import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const montserrat = Montserrat({
  weight: ["400", "500",  "600"], 
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Edvan Davi - Desenvolvedor Web",
  description: "Sou um desenvolvedor Web apaixonado por UX/UI Design.",
};

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

const Layout: React.FC<LayoutProps> = async ({ children, params }) => {
  const { locale } = await params;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();
 

  return (
    <html lang={locale}>
      <body
        cz-shortcut-listen="true"
        className={`${montserrat.className} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export default Layout;