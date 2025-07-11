// src/components/PlatformsGrid.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';

const platforms = [
  {
    name: 'SHEIN',
    href: 'https://www.shein.com/',
    logo: '/assets/shein.svg',
  },
  {
    name: 'TEMU',
    href: 'https://www.temu.com/',
    logo: '/assets/Temu.svg',
  },
  {
    name: 'Zalando',
    href: 'https://www.zalando.com/',
    logo: '/assets/zalando.svg',
  },
  {
    name: 'Lazada',
    href: 'https://www.lazada.com/',
    logo: '/assets/lazada.svg',
  },
];

export default function PlatformsGrid() {
  return (
    <section className="relative isolate z-10 overflow-hidden bg-gradient-to-b from-white via-purple-50 to-white py-24 sm:py-32">
      {/* background blur effect */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Supported Platforms</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Click on a logo to visit the official website and start shopping.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {platforms.map((platform) => (
            <Link
              key={platform.name}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-white p-6 shadow-sm hover:shadow-xl transition-all hover:scale-105 duration-300 flex items-center justify-center"
            >
              <Image
                src={platform.logo}
                alt={platform.name}
                width={80}
                height={80}
                className="object-contain"
              />
            </Link>
          ))}
        </div>
      </div>

      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}
        />
      </div>
    </section>
  );
}