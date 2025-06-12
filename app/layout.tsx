import type { Metadata } from "next";
import {Poppins} from "next/font/google";
import "./globals.css";

const poppinsFont = Poppins({
    weight: ["100","200","300","400","500","600","700","800","900"],
    subsets: ["latin"],
    variable: "--font-poppins",
    style: "normal"
})

export const metadata: Metadata = {
  title: "Colegio Tecnico Global",
  description: "Site institucional do colegio tecnico da global",
    authors: [{
        name: "Felipe Fernandes",
        url: "https://github.com/FelipeFernandes777"
    }],
    robots: "https://colegiotecnicoglobal.com.br/robots.txt",
    manifest: "https://colegiotecnicoglobal.com.br/manifest.json",
    abstract: "Colegio Tecnico Global",
    applicationName: "Colegio Tecnico Global",
    category: "Colegio Tecnico Global",
    creator: "Felipe Fernandes",
    keywords: ["Colegio", "Tecnico", "Global", "Escola", "Curso tecnico", "Cursos profissionalizantes"],
    publisher: "Hostinger VPS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${poppinsFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
