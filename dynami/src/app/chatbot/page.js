'use client'

import Background from "@/app/Components/Background"
import { useState } from 'react'
export default function Chatbot() {

    const [currentState, setCurrentState] = useState('GREET')

    const [answers, setAnswers] = useState({
      age: null,
      weight: null,
      goals: null
    })

    function handleTransition(input, value){
      setAnswers(prev => ({ ...prev, [input]: value}))
    

    const transitions = {
      GREET: { start: 'ASK_AGE'},
      ASK_AGE: { 'Under 18': 'ASK_WEIGHT', '18-44': 'ASK_WEIGHT', '45+': 'ASK_WEIGHT'},
      ASK_WEIGHT: {'Under 100lbs': 'ASK_GOAL', '100-150': 'ASK_GOAL','150-175': 'ASK_GOAL','175-200': 'ASK_GOAL', '200+': 'ASK_GOAL'},
      ASK_GOAL: {'Lose BF(BodyFat)/Gain Muscle': 'RECOMMEND','Gain Muscle/Strength/Maintain BF(BodyFat)': 'RECOMMEND','Maintain Muscle/Gain Strength/Lose BF(Bodyfat)': 'RECOMMEND'},
      RECOMMEND: { restart: 'GREET'}
    }

    const nextState = transitions[currentState][input]
    if(nextState) setCurrentState(nextState)
    }

  return (
    <div className="flex flex-col bg-black min-h-screen ">
      <Background/>

    <div className="flex items-center justify-center flex-1">
  {currentState === 'GREET' && (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-white text-4xl">Welcome to Dynami</h1>
      <p className="text-gray-400">Let's build your perfect workout</p>
      <button 
        onClick={() => handleTransition('start', null)}
        className="bg-green-400 text-black px-8 py-3 rounded-2xl text-xl">
        Get Started
      </button>
    </div>
  )}

  {currentState === 'ASK_AGE' && (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-white text-4xl">What is your age?</h1>
      <div className="flex gap-3">
        <button onClick={() => handleTransition('Under 18', 'age')} className="border border-green-400 text-white px-6 py-3 rounded-2xl">Under 18</button>
        <button onClick={() => handleTransition('18-44', 'age')} className="border border-green-400 text-white px-6 py-3 rounded-2xl">18-44</button>
        <button onClick={() => handleTransition('45+', 'age')} className="border border-green-400 text-white px-6 py-3 rounded-2xl">45+</button>
      </div>
    </div>
  )}

  {currentState === 'ASK_WEIGHT' && (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-white text-4xl">What is your weight?</h1>
      <div className="flex gap-3 flex-wrap justify-center">
        <button onClick={() => handleTransition('Under 100lbs', 'weight')} className="border border-green-400 text-white px-6 py-3 rounded-2xl">Under 100lbs</button>
        <button onClick={() => handleTransition('100-150', 'weight')} className="border border-green-400 text-white px-6 py-3 rounded-2xl">100-150lbs</button>
        <button onClick={() => handleTransition('150-175', 'weight')} className="border border-green-400 text-white px-6 py-3 rounded-2xl">150-175lbs</button>
        <button onClick={() => handleTransition('175-200', 'weight')} className="border border-green-400 text-white px-6 py-3 rounded-2xl">175-200lbs</button>
        <button onClick={() => handleTransition('200+', 'weight')} className="border border-green-400 text-white px-6 py-3 rounded-2xl">200lbs+</button>
      </div>
    </div>
  )}

  {currentState === 'ASK_GOAL' && (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-white text-4xl">What is your goal?</h1>
      <div className="flex flex-col gap-3">
        <button onClick={() => handleTransition('Lose BF(BodyFat)/Gain Muscle', 'goals')} className="border border-green-400 text-white px-6 py-3 rounded-2xl">Lose BF / Gain Muscle</button>
        <button onClick={() => handleTransition('Gain Muscle/Strength/Maintain BF(BodyFat)', 'goals')} className="border border-green-400 text-white px-6 py-3 rounded-2xl">Gain Muscle & Maintain BF</button>
        <button onClick={() => handleTransition('Maintain Muscle/Gain Strength/Lose BF(Bodyfat)', 'goals')} className="border border-green-400 text-white px-6 py-3 rounded-2xl">Maintain Muscle / Lose BF</button>
      </div>
    </div>
  )}

  {currentState === 'RECOMMEND' && (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-white text-4xl">Your Workout</h1>
      <p className="text-gray-400">Age: {answers.age} | Weight: {answers.weight} | Goal: {answers.goals}</p>
      <button onClick={() => handleTransition('restart', null)} className="bg-green-400 text-black px-8 py-3 rounded-2xl text-xl">Start Over</button>
    </div>
  )}
</div>
      
 
    
    
      

      

      
    </div>
  )
}