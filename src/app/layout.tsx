import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const lato = Lato({
  subsets: ["latin"], 
  weight: ['400', '700']
});

export const metadata: Metadata = {
  title: "Banco Bradesco | Entre Nós, Você vem primeiro!",
  description: "Conecte-se ao futuro das finanças com o Bradesco. O nosso aplicativo oferece todas as soluções bancárias que você precisa, com a segurança e a confiança que você merece. Simples, eficiente e ao seu alcance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
