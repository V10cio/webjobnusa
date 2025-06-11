import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Load Google Fonts with CSS variables
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
    icon: [{ url: "/images/JobNusa.png", type: "image/png" }],
    apple: { url: "/images/JobNusa.png", type: "image/png" },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#3b82f6" />
        <link rel="icon" href="/images/JobNusa.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/JobNusa.png" />
        <title>JobNusa</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
