'use client'

import { FaFacebookF, FaInstagram, FaTiktok, FaPhone, FaMapMarkerAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-white px-6 pt-16 pb-10 sm:pt-24 lg:px-8 text-gray-700">
      {/* Gradient Background */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:w-[72rem]"
        />
      </div>

      <div className="mx-auto max-w-7xl grid grid-cols-1 gap-10 md:grid-cols-3">
        {/* Column 1: Logo and social */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
          <Image
            src="/assets/logo.svg"
            alt="Tunilink Order Logo"
            width={160}
            height={60}
            priority
          />
          <p className="text-sm text-gray-400">&copy; 2025 Tunilink Order. All rights reserved.</p>
          <div className="flex gap-5 mt-2">
            <a href="#" className="text-gray-500 hover:text-indigo-600">
              <FaFacebookF size={22} />
            </a>
            <a href="#" className="text-gray-500 hover:text-indigo-600">
              <FaInstagram size={22} />
            </a>
            <a href="#" className="text-gray-500 hover:text-indigo-600">
              <FaTiktok size={22} />
            </a>
            <a href="https://wa.me/21625002924" className="text-gray-500 hover:text-indigo-600">
              <FaWhatsapp size={22} />
            </a>
          </div>
        </div>

        {/* Column 2: Contact */}
        <div className="flex flex-col gap-3 items-center md:items-start">
          <h4 className="text-base font-semibold text-gray-900 mb-1">Contact</h4>
          <p className="flex items-center gap-2 text-sm">
            <FaEnvelope className="text-indigo-600" /> contact@tunilink.com
          </p>
          <p className="flex items-center gap-2 text-sm">
            <FaPhone className="text-indigo-600" /> +216 28 535 038
          </p>
          <p className="flex items-center gap-2 text-sm">
            <FaWhatsapp className="text-green-600" /> +216 25 002 924
          </p>
        </div>

        {/* Column 3: Address */}
        <div className="flex flex-col gap-3 items-center md:items-start">
          <h4 className="text-base font-semibold text-gray-900 mb-1">Address</h4>
          <p className="flex items-start gap-2 text-sm">
            <FaMapMarkerAlt className="text-indigo-600 mt-1" />
            <span>
              Route de Tunis, Km 2 – Résidence Miryam,<br />
              2ᵉ étage, Appartement 24, Sfax, Tunisie
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}

