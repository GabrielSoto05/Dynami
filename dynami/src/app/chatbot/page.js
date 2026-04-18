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
    <div className="bg-black min-h-screen text-white flex items-center justify-center">
      <Background/>

      
    </div>
  )
}