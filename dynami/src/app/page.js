"use client"

import { Bebas_Neue } from 'next/font/google';
const beba = Bebas_Neue({ weight: '400', subsets: ['latin'] });

import { motion } from "motion/react";
import { Dumbbell, Zap, Target } from "lucide-react";
import Link from 'next/link'
import "./globals.css";

export default function Home() {

  const items = [
    { id: 1, icon: Target,   name: "Goal-Driven"  },
    { id: 2, icon: Zap,      name: "Smart AI"     },
    { id: 3, icon: Dumbbell, name: "Customized"   },
  ]

  // ── Animation variants ──────────────────────────────────────────────────

  const containerVariants = {
    hidden:  { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.13, delayChildren: 0.15 }
    }
  }

  const itemVariants = {
    hidden:  { opacity: 0, y: 28, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  }

  const badgeVariants = {
    hidden:  { opacity: 0, scale: 0.8, y: 12 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }
    })
  }

  const logoVariants = {
    hidden:  { opacity: 0, scale: 0.6, rotate: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  }

  const buttonVariants = {
    hidden:  { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  }

  return (
    <>
      <div className="flex items-center justify-center min-h-screen w-full relative overflow-hidden bg-black">

        {/* ── Animated grid background ── */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,255,136,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,255,136,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
              animation: 'gridPulse 4s ease-in-out infinite'
            }}
          />
        </div>

        {/* ── Floating geometric decorations ── */}
        {/* Top-left diamond */}
        <motion.div
          className="absolute top-10 left-4 sm:top-20 sm:left-10 w-16 h-16 sm:w-32 sm:h-32 border-2 border-[#00ff88]/30 rotate-45 pointer-events-none"
          animate={{ y: [0, -20, 0], rotate: [45, 65, 45] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Bottom-right square */}
        <motion.div
          className="absolute bottom-16 right-6 sm:bottom-32 sm:right-20 w-14 h-14 sm:w-24 sm:h-24 border-2 border-[#00ff88]/20 pointer-events-none"
          animate={{ y: [0, 20, 0], rotate: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />

        {/* Mid-right glow orb */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-12 h-12 sm:w-16 sm:h-16 bg-[#00ff88]/10 rounded-full blur-xl pointer-events-none"
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Mid-left glow orb */}
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-14 h-14 sm:w-20 sm:h-20 bg-[#00ff88]/10 rounded-full blur-xl pointer-events-none"
          animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        {/* Extra corner orb — only visible on larger screens */}
        <motion.div
          className="absolute top-1/4 left-1/3 w-8 h-8 sm:w-12 sm:h-12 bg-[#00ff88]/5 rounded-full blur-2xl pointer-events-none hidden sm:block"
          animate={{ scale: [1, 2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* ── Main content ── */}
        <motion.div
          className="flex flex-col justify-center gap-3 sm:gap-4 items-center relative z-10 px-4 py-10 sm:py-0 w-full max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          {/* Logo icon */}
          <motion.div variants={logoVariants}>
            <motion.div
              className="flex justify-center items-center bg-gradient-to-br from-green-400 to-green-700 p-3 sm:p-4 rounded-full w-16 h-16 sm:w-24 sm:h-24 cursor-pointer"
              whileHover={{
                scale: 1.12,
                boxShadow: '0 0 32px rgba(74,222,128,0.5)',
                transition: { duration: 0.25 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Dumbbell
                size={36}
                strokeWidth={2.0}
                className="rotate-90 sm:w-[50px] sm:h-[50px]"
              />
            </motion.div>
          </motion.div>

          {/* Headline */}
          <motion.div variants={itemVariants} className="text-center overflow-hidden">
            <motion.h1
              className={`${beba.className} text-green-400 text-5xl sm:text-7xl md:text-8xl leading-none`}
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              animate={{ clipPath: 'inset(0 0% 0 0)' }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              FORGE YOUR
            </motion.h1>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center overflow-hidden">
            <motion.h1
              className={`${beba.className} text-white text-5xl sm:text-7xl md:text-8xl leading-none`}
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              animate={{ clipPath: 'inset(0 0% 0 0)' }}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              PERFECT WORKOUT
            </motion.h1>
          </motion.div>

          {/* Subheading */}
          <motion.div variants={itemVariants}>
            <p className={`${beba.className} text-gray-500 text-base sm:text-xl md:text-2xl text-center px-4 sm:px-8 pt-2 leading-relaxed`}>
              Chatbot-tailored to your goals. Get ready to unlock<br className="hidden sm:block" /> your full potential with personalized workout plans.
            </p>
          </motion.div>

          {/* Feature badges */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-2 sm:gap-3 justify-center mt-1"
          >
            {items.map((item, i) => (
              <motion.div
                key={item.id}
                custom={i}
                variants={badgeVariants}
                whileHover={{
                  scale: 1.08,
                  backgroundColor: 'rgba(74,222,128,0.1)',
                  borderColor: 'rgba(74,222,128,1)',
                  transition: { duration: 0.2 }
                }}
                className="flex items-center gap-2 border border-green-400/70 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 cursor-default"
              >
                <item.icon size={15} strokeWidth={2} className="text-green-400 sm:w-[18px] sm:h-[18px]" />
                <span className="text-white font-medium text-xs sm:text-sm">{item.name}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA button */}
          <motion.div variants={buttonVariants} className="mt-3 sm:mt-5">
            <Link href="/chatbot">
              <motion.div
                className="bg-gradient-to-br from-green-400 to-green-700 rounded-2xl px-8 py-2.5 sm:px-10 sm:py-3 cursor-pointer relative overflow-hidden"
                whileHover={{
                  scale: 1.08,
                  boxShadow: '0 0 30px rgba(74,222,128,0.45)',
                  transition: { duration: 0.25 }
                }}
                whileTap={{ scale: 0.97 }}
              >
                {/* Shimmer sweep on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '200%' }}
                  transition={{ duration: 0.55, ease: 'easeInOut' }}
                />
                <h1 className={`${beba.className} text-2xl sm:text-3xl text-center text-black relative z-10 min-w-[140px] sm:min-w-[180px]`}>
                  Start Now
                </h1>
              </motion.div>
            </Link>
          </motion.div>

        </motion.div>
      </div>
    </>
  )
}