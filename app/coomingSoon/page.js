'use client';

import Head from 'next/head';

export default function ComingSoon() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-200 via-indigo-300 to-blue-500 relative overflow-hidden">
      <Head>
        <title>JobNusa - Coming Soon</title>
        <meta name="description" content="Aplikasi digital untuk membantu pencari kerja Indonesia." />
        <link rel="icon" href="/images/jobnusa-icon.png" />
      </Head>

      {/* Content Card */}
      <div className="text-center text-white bg-white/20 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-lg">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-lg">
          JobNusa is Launching Soon!
        </h1>
        <p className="text-lg md:text-xl mb-6 text-white/90">
          Kami sedang menyiapkan platform pencarian kerja yang akan menghubungkan SDM lokal dengan peluang kerja global.
        </p>

        <div className="flex justify-center gap-4 mt-6">
          <a
            href="https://www.twitter.com/jobnusa" // Ganti jika sudah ada
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-2 rounded-lg font-semibold transition"
          >
            Twitter
          </a>
          <a
            href="https://www.instagram.com/jobnusa" // Ganti jika sudah ada
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-pink-600 hover:bg-pink-600 hover:text-white px-6 py-2 rounded-lg font-semibold transition"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}
