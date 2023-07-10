import "./globals.css";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import { Providers } from "./Providers";
import classNames from "classnames";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EV-coding-challenge",
  description: "Listview of demo data",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={classNames(inter.className, "h-full")}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
