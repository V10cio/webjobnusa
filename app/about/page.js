'use client'
import Image from 'next/image';
import Link from 'next/link';

export default function Features() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-orange-200 via-orange-400 to-orange-500 text-white font-sans">
            {/* Header and navigation */}
            <header className="flex justify-between items-center px-8 py-4">
                {/* Logo */}

                <Link href="/" className="text-2xl text-black font-bold">
                    Pocket Dhammapada
                </Link>

                {/* Navigation links */}
                <nav className="space-x-6 text-black hidden md:flex">
                    <a href="/about" className="hover:underline">About Us</a>
                </nav>
            </header>

            {/* Main section with animation */}
            <section className="flex flex-col md:flex-row justify-center items-center px-8 mt-8 md:mt-16 text-center md:text-left">
                <div className="flex flex-col justify-center items-center min-h-screen bg-orange-100/25 space-y-8">
                    {/* Misi dan Visi */}
                    <div className="text-center px-6 py-8  shadow-lg rounded-lg">
                        <h3 className="text-3xl font-semibold text-black mb-4">MISI & VISI</h3>
                        <p className="text-lg text-black">
                            Pocket Dhammapada bertujuan untuk menjadi jembatan antara kebijaksanaan tradisional dan teknologi modern, mendukung pengembangan diri, dan membawa kedamaian batin kepada setiap penggunanya.
                        </p>
                    </div>

                    {/* Daftar Fitur */}
                    <div className="text-lg md:text-2xl max-w-3xl mx-auto text-black p-8 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl">
                        <ul className="list-inside text-lg text-black space-y-4">
                            <li>- Beranda: Temukan kutipan pilihan dan akses ke seluruh koleksi ayat Dhammapada.</li>
                            <li>- Favorit: Simpan ayat yang paling berarti bagi Anda untuk dibaca ulang kapan saja.</li>
                            <li>- Profil: Kelola informasi akun Anda dan temukan lebih banyak opsi kustomisasi.</li>
                        </ul>
                    </div>
                </div>

            </section>

            {/* Description section with background image and hover effect */}
            <section className="bg-cover bg-center text-black px-8 py-16 mt-12 text-center relative" style={{ backgroundImage: 'url(https://via.placeholder.com/1500)' }}>
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <h2 className="text-3xl font-semibold text-white relative z-10 mb-4">Pocket Dhammapada</h2>
                <p className="max-w-2xl mx-auto text-white relative z-10">
                    Pocket Dhammapada adalah aplikasi yang dirancang untuk membantu pengguna memahami dan merenungkan ajaran Buddha melalui bacaan Dhammapada, sebuah kumpulan ayat-ayat suci yang penuh kebijaksanaan.
                </p>
            </section>
        </main>
    );
}
