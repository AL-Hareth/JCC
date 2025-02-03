import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./(components)/Navbar";
import Footer from "./(components)/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const titillium = localFont({
  src: "../../public/fonts/Titillium/TitilliumWeb-Regular.ttf",
  variable: "--font-titillium",
  weight: "100 400 900",
})

export const metadata: Metadata = {
  title: "Jordan Cyber Club",
  description: "Jordan Cyber Club, The First Cyber Club in Jordan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${titillium.className} antialiased bg-zinc-900 text-gray-300 min-h-screen`}
      >
        <div className="min-h-screen w-full flex flex-col">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
