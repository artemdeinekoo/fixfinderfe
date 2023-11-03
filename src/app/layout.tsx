import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./nav";
import Aboutus from "./aboutus";
import Services from "./services";
import Footer from "./footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fixfinder",
  description: "A place to find your rabotiaha",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {<NavBar />}
        <div className="conatiner">
          {children}
          {<Aboutus />}
          {<Services />}

          {<Footer />}
        </div>
      </body>
    </html>
  );
}
