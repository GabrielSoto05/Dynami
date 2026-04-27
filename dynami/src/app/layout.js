'use client'

import "./globals.css"

import { Barlow } from 'next/font/google';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ArrowBigLeftDash } from 'lucide-react';
import { motion } from 'motion/react';

const barlow = Barlow({ weight: '400', subsets: ['latin'] });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isChatbot = pathname === '/chatbot';

  return (
    <html lang="en">
      <body className={barlow.className}>
        {children}
        {isChatbot && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="fixed left-3 top-3 sm:left-6 sm:top-1/2 sm:-translate-y-1/2 z-50"
          >
            <Link
              href="/"
              className="flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 bg-black text-white rounded-full shadow-lg border border-green-400/50 bg-green-400/20 hover:scale-110 hover:border-green-400 transition-all duration-300"
              aria-label="Go to Home"
            >
              <ArrowBigLeftDash size={20} className="text-green-400 sm:hidden"/>
              <ArrowBigLeftDash size={32} className="text-green-400 hidden sm:block"/>
            </Link>
          </motion.div>
        )}
      </body>
    </html>
  )
}