import Navbar from "@/components/Navbar";
import "./globals.css";
import { titleFont, bodyFont } from "@/lib/font";

export const metadata = {
  title: "Coffeeroasters",
  description: "Coffeeroasters Subscription Site",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={` ${titleFont.className} ${bodyFont.className} antialiased w-full h-full`}
    >
      <body className={` bg-light-cream h-full w-full  `}>{children}</body>
    </html>
  );
}
