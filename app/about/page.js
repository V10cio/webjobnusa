'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-700 via-blue-600 to-blue-400 text-white relative overflow-hidden">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-20">
        <div className="flex justify-between items-center px-8 py-4">
          <Link href="/" className="text-2xl font-bold text-indigo-700">JobNusa</Link>

          <nav className="hidden md:flex space-x-4">
            <Link href="/about" className="text-gray-700 hover:underline hover:text-blue-500">About</Link>
            <Link href="https://drive.google.com/uc?export=download&id=16BrGZBZmjFInH2GzeAh7s6urNLsOKPw2" className="text-gray-700 hover:underline hover:text-blue-500">Download</Link>
          </nav>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-indigo-700">
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden px-8 pb-4 space-y-2">
            <Link href="/about" className="block text-gray-700 hover:underline hover:text-blue-500">About</Link>
            <Link href="https://drive.google.com/uc?export=download&id=16BrGZBZmjFInH2GzeAh7s6urNLsOKPw2" className="block text-gray-700 hover:underline hover:text-blue-500">Download</Link>
          </nav>
        )}
      </header>

      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/background.jpg"
          alt="Background"
          fill
          style={{ objectFit: 'cover', opacity: 0.15 }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-80px)] px-4">
        <div className="max-w-3xl bg-white/10 backdrop-blur-md p-10 rounded-3xl shadow-2xl text-center space-y-6">
          <h1 className="text-4xl font-bold text-white">Tentang JobNusa</h1>
          <div className="flex justify-center">
            <Image src="/images/JobNusa.png" alt="JobNusa Logo" width={120} height={120} className="rounded-lg" />
          </div>

          <p className="text-lg text-white/90 leading-relaxed">
            <strong>JobNusa</strong> adalah platform digital modern yang bertujuan untuk
            <span className="font-semibold"> menghubungkan tenaga kerja lokal Indonesia dengan peluang kerja nasional hingga global.</span>
            Dibangun menggunakan teknologi <strong>Flutter</strong> dan <strong>Firebase</strong>.
          </p>

          <p className="text-white/80 text-md">
            Dengan fitur pencarian kerja cerdas, sistem notifikasi real-time, serta antarmuka adaptif lintas generasi, JobNusa menjembatani pencari kerja dan penyedia lapangan kerja di era digital.
          </p>
        </div>
      </div>
    </main>
  );
}
