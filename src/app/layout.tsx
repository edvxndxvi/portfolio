import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  weight: ["400", "500", "700"], 
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Edvan Davi - Desenvolvedor Web",
  description: "Sou um desenvolvedor web apaixonado por UX/UI Design.",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${montserrat.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
