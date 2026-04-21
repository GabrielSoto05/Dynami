'use client'


import { motion } from "motion/react"

export default function Background() {
  return (
    <>
    
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 136, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 136, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 border-2 border-[#00ff88]/30 rotate-45"
        animate={{ y: [0, -20, 0], rotate: [45, 65, 45] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-32 right-20 w-24 h-24 border-2 border-[#00ff88]/20"
        animate={{ y: [0, 20, 0], rotate: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-16 h-16 bg-[#00ff88]/10 rounded-full blur-xl"
        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-20 h-20 bg-[#00ff88]/10 rounded-full blur-xl"
        animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
    </div>
   
    </>
  )
}