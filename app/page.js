'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-800 via-indigo-600 to-blue-400 relative overflow-hidden">
      {/* Optional background shapes */}
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src="/images/loadingScreen.png" // replace with actual background shapes if you have
          alt="Background"
          fill
          style={{ objectFit: 'cover', opacity: 0.2 }}
        />
      </div>

      {/* Main Card */}
      <div className="relative z-10 bg-gradient-to-bl from-indigo-300 via-blue-200 to-white rounded-3xl p-8 shadow-2xl max-w-sm w-[90%] text-center">
        {/* Title */}
        <h1 className="text-3xl font-bold text-black mb-4">JobNusa</h1>

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/images/JobNusa.png" // replace with actual JobNusa logo
            alt="JobNusa Logo"
            width={150}
            height={150}
            className="rounded-md"
          />
        </div>

        {/* Welcome Text */}
        <h2 className="text-xl font-bold text-black mb-2">Welcome</h2>
        <p className="text-black text-sm font-medium leading-relaxed">
          Welcome to JobNusa <br />
          Find The Best Career Opportunities <br />
          For Your Future!
        </p>

        {/* Dot Indicators */}
        <div className="mt-6 flex justify-center space-x-2">
          <span className="w-3 h-3 bg-black rounded-full"></span>
          <span className="w-3 h-3 bg-white border border-black rounded-full"></span>
          <span className="w-3 h-3 bg-white border border-black rounded-full"></span>
        </div>
      </div>
    </main>
  );
}
