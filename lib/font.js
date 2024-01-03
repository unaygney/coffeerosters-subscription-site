import { Fraunces, Barlow } from "next/font/google";

export const titleFont = Fraunces({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-fraunces",
  adjustFontFallback: false,
  fallback: ["Roboto", "system-ui"],
});

export const bodyFont = Barlow({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-barlow",
  fallback: ["Roboto", "system-ui"],
});
