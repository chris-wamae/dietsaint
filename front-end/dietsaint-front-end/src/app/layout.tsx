import type { Metadata } from "next";

import { Inter } from "next/font/google";

import "./globals.css";

import NavBar from "@/app/components/navbar/navbar";

const inter = Inter({ subsets: ["latin"] });



export const metadata: Metadata = {
  title: "Calculate nutrient content in your food",
  description: "Calculate nutrients like calories, proteins, carbohydrates and vitamins",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <NavBar leftNavLinks={["","","","","Contact"]} rightNavLinks={[]}/>
       {children}
        </body>
    </html>
  );
}
