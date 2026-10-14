import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: { default: "Game of Life Sports — Sports IP & Sport-tainment", template: "%s · Game of Life Sports" },
  description: "Game of Life Sports creates, owns and grows sports IP and leagues across India, starting with golf. Build with us.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceSerif.variable} h-full antialiased`}>
      <body className="min-h-full">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
