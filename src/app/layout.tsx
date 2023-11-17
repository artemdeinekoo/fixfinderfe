import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/Header/Header";
import AboutUs from "@/components/AboutUs/AboutUs";
import Services from "@/components/Services/Services";
import Reviews from "@/components/Reviews/Reviews";
import ContactUs from "@/components/ContactUs/ContactUs";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "FixFinder",
  description: "Місце, де власники та майстри - на одній хвилі",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="wrapper">{children}</div>
        <AboutUs />
        <Services/>
        <Reviews/>
        <ContactUs/>
        <Footer />
      </body>
    </html>
  );
}
