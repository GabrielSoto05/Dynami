"use client"

import { motion } from "motion/react";
import { Dumbbell, Zap, Target } from "lucide-react"; 

import  Link  from 'next/link'
import "./globals.css";


export default function Home() {

  const items = 
  [
  {
    id:1, 
    icon: Target,
    name: "Goal-Driven"
  },
  {
    id:2, 
    icon: Zap, 
    name: "Smart AI"
  },
  {
    id:3, 
    icon: Dumbbell,
    name: "Customized"
  }]

  
  return (

    
    <>
    <div className="flex items-center justify-center min-h-screen size-full relative overflow-auto bg-black ">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 136, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 136, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'gridPulse 4s ease-in-out infinite'
          }}
        />
      </div>

      <motion.div
        className="absolute top-20 left-10 w-32 h-32 border-2 border-[#00ff88]/30 rotate-45"
        animate={{
          y: [0, -20, 0],
          rotate: [45, 65, 45],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-32 right-20 w-24 h-24 border-2 border-[#00ff88]/20"
        animate={{
          y: [0, 20, 0],
          rotate: [0, 20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />

      <motion.div
        className="absolute top-1/3 right-1/4 w-16 h-16 bg-[#00ff88]/10 rounded-full blur-xl"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/4 w-20 h-20 bg-[#00ff88]/10 rounded-full blur-xl"
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    

    <div className='flex flex-col justify-center gap-3 items-center '>
      <div 
      className='flex justify-center items-center bg-green-400 p-4 rounded-full w-24 h-24  '>
        <Dumbbell size={50} strokeWidth={2.0} className='rotate-90 items-center'/>
      </div>

      <h1 
      className='text-green-400 text-8xl'
      strokeWidth={5.0} >FORGE YOUR</h1>
      <h1 
      className='text-white text-8xl'
      strokeWidth={5.0}>PERFECT WORKOUT</h1>

      <p 
      className='text-gray-600 text-2xl text-center p-8'>
        AI-powered training tailored to your goals.  Get <br/> ready to unlock your full potential with <br/> personalized workout plans.
      </p>
      <div className='flex gap-3'>
      {items.map((item) => (
        <div key={item.id} className="flex items-center gap-2 border border-green-400 rounded-full px-4 py-2">
          <item.icon size={18} strokeWidth={2} className="text-green-400"/>
          <span className="text-white font-medium">{item.name}</span>
        </div>
      ))}
      </div>

      <Link href="/chatbot" className='flex bg-green-400 rounded-2xl p-2 mt-5 relative z-10'>
  
    <h1 className='text-3xl w-3xs text-center'>Start Now</h1>
  
</Link>
    </div>
    
    
    </div>
    </>
  );
}
