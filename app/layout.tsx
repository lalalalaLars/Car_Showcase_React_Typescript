import { Footer, Navbar } from "@/components";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Rent",
  description: "Book and rent the best cars in the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="realtive">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
