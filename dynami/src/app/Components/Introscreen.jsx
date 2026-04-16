import React from 'react'
import { Dumbbell, Zap, Target } from "lucide-react"; 

function Introscreen() {
  
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
    <div className='flex flex-col justify-center items-center '>
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
      {items.map((item) => (
        <div key={item.id} className="flex items-center gap-2 border border-green-400 rounded-full px-4 py-2 bg-green-400">
          <item.icon size={18} strokeWidth={2} className="text-green-400"/>
          <span className="text-green-400 font-medium">{item.name}</span>
        </div>
      ))}
    </div>
    
    </>
  )
}

export default Introscreen