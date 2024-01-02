import "./globals.css";
import { titleFont, bodyFont } from "@/lib/font";

export const metadata = {
  title: "Coffeeroasters",
  description: "Coffeeroasters Subscription Site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${(titleFont, bodyFont)}`}>{children}</body>
    </html>
  );
}
