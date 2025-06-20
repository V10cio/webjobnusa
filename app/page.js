'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-800 via-indigo-600 to-blue-400 text-white relative overflow-hidden">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-20">
        <div className="flex justify-between items-center px-8 py-4">
          <Link href="/" className="text-2xl font-bold text-indigo-700">JobNusa</Link>

          <nav className="hidden md:flex space-x-4">
            <Link href="/about" className="text-gray-700 hover:underline hover:text-blue-500">About</Link>
            <Link href="https://drive.google.com/uc?export=download&id=16BrGZBZmjFInH2GzeAh7s6urNLsOKPw2" className="text-gray-700 hover:underline hover:text-blue-500">Download</Link>
          </nav>

          {/* Mobile toggle */}
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

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/background.jpg"
          alt="Background"
          fill
          style={{ objectFit: 'cover', opacity: 0.2 }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-80px)] px-4">
        <div className="bg-gradient-to-bl from-indigo-300 via-blue-200 to-white rounded-3xl p-8 shadow-2xl max-w-md w-full text-center space-y-6">
          <h1 className="text-4xl font-extrabold text-gray-900">JobNusa</h1>

          <div className="flex justify-center">
            <Image
              src="/images/JobNusa.png"
              alt="JobNusa Logo"
              width={130}
              height={130}
              className="rounded-md"
            />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-gray-800">Welcome</h2>
            <p className="text-sm text-gray-700 font-medium leading-relaxed">
              Welcome to <strong>JobNusa</strong> — a modern job platform designed to connect local talent with national and global opportunities.
            </p>
          </div>
          <div className="flex justify-center gap-4 pt-4">
            <Link href="/features" className="bg-indigo-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-indigo-800 transition">Explore Features</Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-8 bg-white shadow-inner">
        <div className="space-x-4">
          <Link href="/x.com" className="text-indigo-600 font-medium hover:underline">X</Link>
          <Link href="/instagram.com" className="text-indigo-600 font-medium hover:underline">Instagram</Link>
        </div>
      </footer>
    </main>
  );
}
