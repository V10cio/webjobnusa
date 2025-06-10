'use client';

import Head from 'next/head';
import Link from 'next/link';

export default function ComingSoon() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-200 via-indigo-300 to-blue-500 text-white relative overflow-hidden">
      <Head>
        <title>JobNusa - Coming Soon</title>
        <meta name="description" content="Aplikasi digital untuk membantu pencari kerja Indonesia." />
        <link rel="icon" href="/images/JobNusa.png" />
      </Head>

      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4 bg-white shadow-md sticky top-0 z-20">
        <Link href="/" className="text-2xl font-bold text-indigo-700">JobNusa</Link>
        <nav className="space-x-4 hidden md:flex">
          <Link href="/about" className="text-gray-700 hover:underline hover:text-blue-500">About</Link>
          <Link href="/comingSoon" className="text-gray-700 hover:underline hover:text-blue-500">Coming Soon</Link>
        </nav>
      </header>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-80px)] px-4">
        <div className="text-center text-white bg-white/20 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-lg">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-lg">JobNusa is Launching Soon!</h1>
          <p className="text-lg md:text-xl mb-6 text-white/90">
            Kami sedang menyiapkan platform pencarian kerja yang akan menghubungkan SDM lokal dengan peluang kerja global.
          </p>

          <div className="flex justify-center gap-4 mt-6">
            <a href="https://www.twitter.com/jobnusa" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-2 rounded-lg font-semibold transition">Twitter</a>
            <a href="https://www.instagram.com/jobnusa" target="_blank" rel="noopener noreferrer" className="bg-white text-pink-600 hover:bg-pink-600 hover:text-white px-6 py-2 rounded-lg font-semibold transition">Instagram</a>
          </div>

          <div className="mt-6">
            <Link href="/" className="text-white underline hover:text-indigo-200 transition">&larr; Kembali ke Beranda</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
