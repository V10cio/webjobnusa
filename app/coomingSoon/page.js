'use client'

import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-orange-200 via-orange-400 to-orange-500">
      <Head>
        <title>Coming Soon</title>
        <meta name="description" content="Coming soon page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="text-center text-white p-6 bg-opacity-80 rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold mb-4">We&apos;re Coming Soon!</h1>
        <p className="text-lg mb-6">We&apos;re working hard to bring you something amazing. Stay tuned!</p>
        <div className="flex justify-center">
          <div className="mr-4">
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-2 rounded-lg transition"
            >
              Follow Us
            </a>
          </div>
          <div>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-2 rounded-lg transition"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
