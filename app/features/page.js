'use client';

import Link from 'next/link';

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-blue-200 text-gray-800 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4 bg-white shadow-md sticky top-0 z-20">
        <Link href="/" className="text-2xl font-bold text-indigo-700">JobNusa</Link>

        <nav className="space-x-4 hidden md:flex">
          <Link href="/about" className="text-gray-700 hover:underline hover:text-blue-500">About</Link>
          <Link href="/comingSoon" className="text-gray-700 hover:underline hover:text-blue-500">Coming Soon</Link>
        </nav>
      </header>

      {/* Feature Section */}
      <section className="px-6 py-16 max-w-5xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-indigo-800 mb-4">Fitur Utama JobNusa</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Temukan fitur-fitur unggulan yang dirancang untuk mempermudah pencarian kerja dan mendukung pengalaman pengguna lintas generasi.
          </p>
        </div>

        {/* Fitur List */}
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "🔍 Beranda",
              desc: "Temukan lowongan pekerjaan terbaru, kategori populer, dan rekomendasi berdasarkan minat pengguna.",
            },
            {
              title: "⭐ Favorit",
              desc: "Simpan lowongan yang menarik dan akses kembali kapan pun saat ingin melamar.",
            },
            {
              title: "👤 Profil Pengguna",
              desc: "Kelola informasi akun, tampilkan profil profesional, dan aktifkan mode gelap atau adaptif.",
            },
            {
              title: "📢 Posting Lowongan",
              desc: "Pengguna juga bisa membagikan lowongan untuk membantu sesama pencari kerja.",
            },
            {
              title: "🗺️ Pencarian & Filter",
              desc: "Cari pekerjaan berdasarkan kategori, lokasi, atau kata kunci, lengkap dengan integrasi Google Maps.",
            },
            {
              title: "🔔 Notifikasi & Komentar",
              desc: "Dapatkan notifikasi real-time dan diskusi langsung melalui komentar pada setiap posting.",
            },
          ].map((fitur, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-6 transition-transform hover:scale-105 hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold text-indigo-700 mb-2">{fitur.title}</h3>
              <p className="text-gray-700">{fitur.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation Footer */}
      <footer className="text-center py-8 bg-white shadow-inner">
        <div className="space-x-4">
          <Link
            href="/x.com"
            className="text-indigo-600 font-medium hover:underline"
          >
            X
          </Link>
          <Link
            href="/instagram.com"
            className="text-indigo-600 font-medium hover:underline"
          >
            Instagram
          </Link>
        </div>
      </footer>
    </main>
  );
}
