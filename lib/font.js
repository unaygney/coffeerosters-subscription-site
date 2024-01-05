import { Fraunces, Barlow } from "next/font/google";

export const titleFont = Fraunces({
  subsets: ["latin"],
  weight: [],
  variable: "--font-fraunces",
  adjustFontFallback: false,
  fallback: ["Roboto", "system-ui"],
});

export const bodyFont = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow",
  fallback: ["Roboto", "system-ui"],
});
