'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-orange-200 via-orange-400 to-orange-500 text-white font-sans">
        {/* Header and navigation */}
        <header className="flex justify-between items-center px-8 py-4">
          {/* Logo */}
          <div className="text-2xl text-black font-bold">Pocket Dhammapada</div>

          {/* Navigation links */}
          <nav className="hidden md:flex ml-auto space-x-4 text-black">
            <Link href="/about" className="hover:underline">
              <h3>About Us</h3>
            </Link>
            <Link
              href="https://drive.google.com/uc?export=download&id=1hN9wrf4_X8F9rSmMgTA4FgrQy51hNuzc"
              className="hover:underline"
            >
              <h3>Guide Book</h3>
            </Link>
          </nav>
        </header>

        {/* Main section */}
        <section className="flex flex-col md:flex-row justify-center items-center px-8 mt-8 md:mt-16 text-center md:text-left">
          <div className="max-w-md md:mr-12">
            {/* Title */}
            <h1 className="text-4xl text-black md:text-5xl font-bold mb-4">Pocket Dhammapada</h1>
            {/* Subtitle */}
            <p className="text-lg text-black mb-6">Buddhist&apos;s Guide to Life</p>
            {/* App download buttons */}
            {/* <div className="flex justify-center md:justify-start gap-4 mb-6">
              <Link href="/coomingSoon">
                <button className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
                  Download on the App Store
                </button>
              </Link>

              <a href="/coomingSoon" target="_blank" rel="noopener noreferrer">
                <button className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
                  Get it on Google Play
                </button>
              </a>
            </div> */}

            {/* Download button */}
            <div className="text-2xl text-black bg-gray-500 rounded-xl w-[250px] p-4 cursor-pointer">
              <a href="https://drive.google.com/uc?export=download&id=1G_gzvN8eVKvAhzWeQFnjzwSWHQiAk67C" download className="flex items-center text-black hover:text-blue-700 w-full" target="_blank">
                <Image
                  src="/images/download.png"
                  alt="Download"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                <span className="flex items-center">
                  <i className="fa fa-download mr-2"></i> Download
                </span>
              </a>
            </div>
          </div>

          {/* App preview image */}
          <div className="relative mt-12 md:mt-0 w-[400px] h-[600px] mb-20">
            {/* Gambar belakang */}
            <div className="absolute top-10 left-25 translate-x-12 z-0">
              <Image
                src="/images/homeScreen.jpg"
                alt="Second screen"
                width={350}
                height={550}
                className="rounded-2xl shadow-2xl"
                style={{ boxShadow: '15px 15px 25px rgba(0, 0, 0, 0.75)' }}
              />
            </div>

            {/* Gambar depan */}
            <div className="absolute top-0 left-0 z-10">
              <Image
                src="/images/loadingScreen.jpg"
                alt="Main screen"
                width={350}
                height={550}
                className="rounded-2xl shadow-2xl"
                style={{ boxShadow: '15px 15px 25px rgba(0, 0, 0, 0.5)' }}
              />
            </div>
          </div>
        </section>

        {/* Description section */}
        <section className="bg-gray-400 text-black px-8 py-16 mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Pocket Dhammapada</h2>
          <p className="max-w-2xl mx-auto">
            Pocket Dhammapada adalah aplikasi yang dirancang untuk membantu pengguna memahami dan merenungkan ajaran Buddha melalui bacaan Dhammapada, sebuah kumpulan ayat-ayat suci yang penuh kebijaksanaan. Aplikasi ini memungkinkan Anda untuk membawa kebijaksanaan kuno ke dalam kehidupan modern dengan cara yang praktis dan mudah diakses.
          </p>
        </section>
      </main>
    </>

  );
}