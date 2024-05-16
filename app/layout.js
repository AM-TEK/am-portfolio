import { Inter } from "next/font/google";
import Header from "@/components/header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alejandro M. | Portfolio",
  description: "Alejandro is a frontend developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-100 text-gray-950 pt-28 sm:pt-30 relative`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
