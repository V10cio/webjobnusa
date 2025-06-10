'use client';

import Link from 'next/link';

export default function Features() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-200 to-blue-300 text-gray-800 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
        <Link href="/" className="text-2xl font-bold text-indigo-700">
          JobNusa
        </Link>

        <nav className="space-x-6 text-gray-700 hidden md:flex">
          <Link href="/about" className="hover:underline hover:text-blue-500 transition">
            About Us
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <section className="px-6 py-16 space-y-12 bg-white/50 backdrop-blur-md">
        {/* Visi & Misi */}
        <div className="max-w-3xl mx-auto text-center p-8 bg-white rounded-xl shadow-lg">
          <h3 className="text-3xl font-semibold text-indigo-800 mb-4">Misi & Visi</h3>
          <p className="text-md text-gray-700 leading-relaxed">
            JobNusa hadir untuk menghubungkan tenaga kerja lokal dengan peluang kerja dari tingkat nasional hingga global melalui aplikasi digital yang modern, inklusif, dan mudah digunakan.
          </p>
        </div>

        {/* Fitur Aplikasi */}
        <div className="max-w-4xl mx-auto p-8 bg-white rounded-xl shadow-lg transition-transform hover:scale-105 hover:shadow-xl">
          <h4 className="text-2xl font-semibold text-blue-800 mb-6 text-center">Fitur Utama Aplikasi</h4>
          <ul className="space-y-5 text-left text-lg text-gray-800 list-disc list-inside">
            <li>
              <strong>Beranda:</strong> Temukan lowongan pekerjaan terbaru, kategori populer, dan rekomendasi berdasarkan minat.
            </li>
            <li>
              <strong>Favorit:</strong> Simpan lowongan pekerjaan yang Anda minati untuk dilamar ulang kapan saja.
            </li>
            <li>
              <strong>Profil:</strong> Kelola informasi akun Anda, tampilkan profil profesional, dan sesuaikan pengalaman pengguna (termasuk mode gelap).
            </li>
            <li>
              <strong>Posting:</strong> Bagikan lowongan pekerjaan yang kamu ketahui kepada publik, baik kenalan maupun yang belum dikenal.
            </li>
            <li>
              <strong>Pencarian & Filter:</strong> Cari pekerjaan berdasarkan kategori, lokasi, atau kata kunci, dengan dukungan Google Maps.
            </li>
            <li>
              <strong>Notifikasi & Komentar:</strong> Interaksi langsung dengan pemberi kerja melalui komentar dan notifikasi real-time.
            </li>
          </ul>
        </div>
      </section>

      {/* Section Penutup */}
      <section
        className="relative bg-cover bg-center text-white px-8 py-24"
        style={{ backgroundImage: 'url(/images/jobnusa-banner.jpg)' }} // Ganti sesuai asetmu
      >
        <div className="absolute inset-0 bg-indigo-900/60 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Tentang JobNusa</h2>
          <p className="text-md leading-relaxed">
            Aplikasi JobNusa adalah solusi digital untuk membantu pencari kerja menemukan dan mengakses informasi lowongan kerja secara praktis dan personal. Dirancang menggunakan Flutter & Firebase, JobNusa mendukung pencarian kerja yang lebih cerdas dan terintegrasi.
          </p>
        </div>
      </section>
    </main>
  );
}
