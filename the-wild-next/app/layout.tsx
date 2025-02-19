import { ReactNode } from "react";
import { Josefin_Sans } from "next/font/google";

import Header from "./_components/Header";
import "@/app/_styles/globals.css";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

console.log(josefin);

export const metadata = {
  // title: "The Wild Oasis",
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  description: "The Wild Oasis is a place of peace and tranquility.",
};

interface RootLayoutProps {
  children: ReactNode;
}
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <title>{metadata.title.default}</title>
        <link rel="icon" href="/Logo.png" />
      </head>
      <body
        className={`${josefin.className} 
        bg-primary-950
         text-primary-100
          min-h-screen
           flex flex-col
            antialiased relative`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 ">
          <main className="max-w-7xl mx-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
