import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Load Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Site metadata
export const metadata = {
  title: "JobNusa",
  description: "Find the best career opportunities for your future!",
  icons: {
    icon: [
      { url: '/images/JobNusa.png', type: 'image/png' }, // ✅ Replace with your JobNusa favicon path
    ],
    apple: { url: '/images/JobNusa.png', type: 'image/png' }, // ✅ Replace with your JobNusa apple icon path
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/JobNusa.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/JobNusa.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
