import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../../public/assert/Font-femily/css/font-awesome.min.css";
import TopLine from "./TopLine/page";
import Navbar from "./Navbar/page";
import Footer from "./Footer/page";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AtoZ Cab",
  description: "AtoZ Cab Dwarka offers reliable and professional taxi services in Dwarka. Book your ride for a seamless and comfortable travel experience with the best cab service in Dwarka."
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&family=Epilogue:ital,wght@0,100..900;1,100..900&family=Lexend:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <>
          <TopLine />
          <Navbar />
          {children}
          <Footer />
        </>
      </body>
    </html>
  );
}
