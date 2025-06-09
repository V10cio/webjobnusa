import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pocket DhammaPada",
  description: "Deskripsi Aplikasi Anda",
  icons: {
    icon: [
      { url: '/images/PocketDhammapada32.png', type: 'image/png' }
    ],
    apple: { url: '/images/PocketDhammapada32.png', type: 'image/png' }
  },

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/PocketDhammapada32.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/PocketDhammapada32.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}