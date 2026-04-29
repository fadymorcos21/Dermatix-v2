import "./globals.css";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata = {
  title: "Dermatix — Medical Aesthetics. Woodbridge.",
  description:
    "A quiet studio for the obsessively subtle: Botox, filler, HIFU, PRP, Hydrafacial and more. Woodbridge, Ontario.",
  openGraph: {
    title: "Dermatix — Medical Aesthetics",
    description:
      "Board-certified medical aesthetics in Woodbridge, ON. Considered, editorial, undetectable.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#f6f1e7",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="bg-bone text-ink antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
