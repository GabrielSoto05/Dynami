'use client'

import Background from "@/app/Components/Background"
import { useState } from 'react'
import { Dumbbell } from "lucide-react";


import { Bebas_Neue } from 'next/font/google';

const beba = Bebas_Neue({ weight: '400', subsets: ['latin'] });

export default function Chatbot() {

    const [currentState, setCurrentState] = useState('GREET')

    const [answers, setAnswers] = useState({
      age: null,
      weight: null,
      goals: null
    })

    const workouts = {
      'Lose BF(BodyFat)/Gain Muscle': {
    'Under 18': {
      name: 'Body Recomp - Junior',
      days: {
        'Day 1': {
          focus: 'Chest, Triceps & Shoulders',
          exercises: [
            { name: 'Push-ups', sets: 4, reps: 10 },
            { name: 'Cable Flies', sets: 3, reps: 12 },
            { name: 'Tricep Pushdown', sets: 3, reps: 15 },
            { name: 'Cable Lateral Raise', sets: 3, reps: 12 },
            { name: 'Overhead Press', sets: 3, reps: 8 },
            { name: 'Inclined Treadmill', incline: 10.0, timeMinutes: 25 }
          ]
        },
        'Day 2': {
          focus: 'Back & Bicep',
          exercises: [
            { name: 'Lat Pulldowns', sets: 4, reps: 8 },
            { name: 'Lat Pullovers', sets: 3, reps: 10 },
            { name: 'Chest Supported Rows', sets: 3, reps: 8 },
            { name: 'Cable Bicep Pulls', sets: 3, reps: 8 },
            { name: 'Hammer Curls', sets: 3, reps: 8 },
            { name: 'Inclined Treadmill', incline: 10.0, timeMinutes: 25 }
          ]
        },
        'Day 3': {
          focus: 'Quads & Calves',
          exercises: [
            { name: 'Back Squats', sets: 4, reps: 8 },
            { name: 'Decline Leg Press', sets: 3, reps: 8 },
            { name: 'Leg Extension', sets: 3, reps: 8 },
            { name: 'Calve Raise Machine', sets: 4, reps: 8 },
            { name: 'Inclined Treadmill', incline: 10.0, timeMinutes: 25 }
          ]
        },
        'Day 4': {
          focus: 'Hamstrings & Glutes',
          exercises: [
            { name: 'Deadlift', sets: 4, reps: 8 },
            { name: 'RDLs', sets: 3, reps: 8 },
            { name: 'Hamstring Curls', sets: 4, reps: 8 },
            { name: 'Hip Thrust', sets: 4, reps: 8 },
            { name: 'Inclined Treadmill', incline: 10.0, timeMinutes: 25 }
          ]
        }
      }
    },
    '18-44': {
      name: 'Body Recomp - Prime',
      days: {
        'Day 1': {
          focus: 'Chest, Triceps & Shoulders',
          exercises: [
            { name: 'Bench Press', sets: 4, reps: 10 },
            { name: 'Incline Dumbbell Press', sets: 3, reps: 12 },
            { name: 'Tricep Pushdown', sets: 3, reps: 15 },
            { name: 'Cable Lateral Raise', sets: 3, reps: 12 },
            { name: 'Overhead Press', sets: 3, reps: 10 },
            { name: 'Inclined Treadmill', incline: 10.0, timeMinutes: 30 }
          ]
        },
        'Day 2': {
          focus: 'Back & Bicep',
          exercises: [
            { name: 'Lat Pulldowns', sets: 4, reps: 10 },
            { name: 'Lat Pullovers', sets: 3, reps: 12 },
            { name: 'Chest Supported Rows', sets: 3, reps: 10 },
            { name: 'Cable Bicep Pulls', sets: 3, reps: 10 },
            { name: 'Hammer Curls', sets: 3, reps: 10 },
            { name: 'Inclined Treadmill', incline: 10.0, timeMinutes: 30 }
          ]
        },
        'Day 3': {
          focus: 'Quads & Calves',
          exercises: [
            { name: 'Back Squats', sets: 4, reps: 10 },
            { name: 'Decline Leg Press', sets: 3, reps: 10 },
            { name: 'Leg Extension', sets: 3, reps: 10 },
            { name: 'Calve Raise Machine', sets: 4, reps: 10 },
            { name: 'Inclined Treadmill', incline: 10.0, timeMinutes: 30 }
          ]
        },
        'Day 4': {
          focus: 'Hamstrings & Glutes',
          exercises: [
            { name: 'Deadlift', sets: 4, reps: 10 },
            { name: 'RDLs', sets: 3, reps: 10 },
            { name: 'Hamstring Curls', sets: 4, reps: 10 },
            { name: 'Hip Thrust', sets: 4, reps: 10 },
            { name: 'Inclined Treadmill', incline: 10.0, timeMinutes: 30 }

          ]
        }
      }
    },
    '45+': {
      name: 'Body Recomp - Masters',
      days: {
        'Day 1': {
          focus: 'Chest, Triceps & Shoulders',
          exercises: [
            { name: 'Bench Press', sets: 2, reps: 15 },
            { name: 'Incline Dumbbell Press', sets: 2, reps: 15 },
            { name: 'Tricep Pushdown', sets: 2, reps: 20 },
            { name: 'Cable Lateral Raise', sets: 2, reps: 15 },
            { name: 'Overhead Press', sets: 2, reps: 15 },
            { name: 'Inclined Treadmill', incline: 8.0, timeMinutes: 15 }
          ]
        },
        'Day 2': {
          focus: 'Back & Bicep',
          exercises: [
            { name: 'Lat Pulldowns', sets: 2, reps: 15 },
            { name: 'Lat Pullovers', sets: 2, reps: 15 },
            { name: 'Chest Supported Rows', sets: 2, reps: 15 },
            { name: 'Cable Bicep Pulls', sets: 2, reps: 15 },
            { name: 'Hammer Curls', sets: 2, reps: 15 },
            { name: 'Inclined Treadmill', incline: 8.0, timeMinutes: 15 }
          ]
        },
        'Day 3': {
          focus: 'Quads & Calves',
          exercises: [
            { name: 'Decline Leg Press', sets: 2, reps: 15 },
            { name: 'Leg Extension', sets: 2, reps: 15 },
            { name: 'Calve Raise Machine', sets: 2, reps: 20 },
            { name: 'Inclined Treadmill', incline: 8.0, timeMinutes: 15 }
          ]
        },
        'Day 4': {
          focus: 'Hamstrings & Glutes',
          exercises: [
            { name: 'RDLs', sets: 2, reps: 15 },
            { name: 'Hamstring Curls', sets: 2, reps: 15 },
            { name: 'Hip Thrust', sets: 2, reps: 15 },
            { name: 'Inclined Treadmill', incline: 8.0, timeMinutes: 15 }

          ]
        }
      }
    }
  },
  'Gain Muscle/Strength/Maintain BF(BodyFat)': {
    'Under 18': {
      name: 'Strength Overload - Junior',
      days: {
        'Day 1': {
          focus: 'Chest, Triceps & Shoulders',
          exercises: [
            { name: 'Bench Press', sets: 4, reps: 8 },
            { name: 'Incline Dumbbell Press', sets: 3, reps: 12 },
            { name: 'Tricep Pushdown', sets: 3, reps: 15 },
            { name: 'Cable Lateral Raise', sets: 3, reps: 12 },
            { name: 'Overhead Press', sets: 3, reps: 8 }
          ]
        },
        'Day 2': {
          focus: 'Back & Bicep',
          exercises: [
            { name: 'Lat Pulldowns', sets: 4, reps: 8 },
            { name: 'Lat Pullovers', sets: 3, reps: 10 },
            { name: 'Chest Supported Rows', sets: 3, reps: 8 },
            { name: 'Cable Bicep Pulls', sets: 3, reps: 8 },
            { name: 'Hammer Curls', sets: 3, reps: 8 }
          ]
        },
        'Day 3': {
          focus: 'Quads & Calves',
          exercises: [
            { name: 'Back Squats', sets: 4, reps: 8 },
            { name: 'Decline Leg Press', sets: 3, reps: 8 },
            { name: 'Leg Extension', sets: 3, reps: 8 },
            { name: 'Calve Raise Machine', sets: 4, reps: 8 }
          ]
        },
        'Day 4': {
          focus: 'Hamstrings & Glutes',
          exercises: [
            { name: 'Deadlift', sets: 4, reps: 8 },
            { name: 'RDLs', sets: 3, reps: 8 },
            { name: 'Hamstring Curls', sets: 4, reps: 8 },
            { name: 'Hip Thrust', sets: 4, reps: 8 }
          ]
        }
      }
    },
    '18-44': {
      name: 'Strength Overload - Prime',
      days: {
        'Day 1': {
          focus: 'Chest, Triceps & Shoulders',
          exercises: [
            { name: 'Bench Press', sets: 4, reps: 10 },
            { name: 'Incline Dumbbell Press', sets: 3, reps: 12 },
            { name: 'Tricep Pushdown', sets: 3, reps: 15 },
            { name: 'Cable Lateral Raise', sets: 3, reps: 12 },
            { name: 'Overhead Press', sets: 3, reps: 10 }
          ]
        },
        'Day 2': {
          focus: 'Back & Bicep',
          exercises: [
            { name: 'Lat Pulldowns', sets: 4, reps: 10 },
            { name: 'Lat Pullovers', sets: 3, reps: 12 },
            { name: 'Chest Supported Rows', sets: 3, reps: 10 },
            { name: 'Cable Bicep Pulls', sets: 3, reps: 10 },
            { name: 'Hammer Curls', sets: 3, reps: 10 }
          ]
        },
        'Day 3': {
          focus: 'Quads & Calves',
          exercises: [
            { name: 'Back Squats', sets: 4, reps: 10 },
            { name: 'Decline Leg Press', sets: 3, reps: 10 },
            { name: 'Leg Extension', sets: 3, reps: 10 },
            { name: 'Calve Raise Machine', sets: 4, reps: 10 }
          ]
        },
        'Day 4': {
          focus: 'Hamstrings & Glutes',
          exercises: [
            { name: 'Deadlift', sets: 4, reps: 10 },
            { name: 'RDLs', sets: 3, reps: 10 },
            { name: 'Hamstring Curls', sets: 4, reps: 10 },
            { name: 'Hip Thrust', sets: 4, reps: 10 }
          ]
        }
      }
    },
    '45+': {
      name: 'Strength Overload - Masters',
      days: {
        'Day 1': {
          focus: 'Chest, Triceps & Shoulders',
          exercises: [
            { name: 'Bench Press', sets: 2, reps: 15 },
            { name: 'Incline Dumbbell Press', sets: 2, reps: 15 },
            { name: 'Tricep Pushdown', sets: 2, reps: 20 },
            { name: 'Cable Lateral Raise', sets: 2, reps: 15 },
            { name: 'Overhead Press', sets: 2, reps: 15 }
          ]
        },
        'Day 2': {
          focus: 'Back & Bicep',
          exercises: [
            { name: 'Lat Pulldowns', sets: 2, reps: 15 },
            { name: 'Lat Pullovers', sets: 2, reps: 15 },
            { name: 'Chest Supported Rows', sets: 2, reps: 15 },
            { name: 'Cable Bicep Pulls', sets: 2, reps: 15 },
            { name: 'Hammer Curls', sets: 2, reps: 15 }
          ]
        },
        'Day 3': {
          focus: 'Quads & Calves',
          exercises: [
            { name: 'Decline Leg Press', sets: 2, reps: 15 },
            { name: 'Leg Extension', sets: 2, reps: 15 },
            { name: 'Calve Raise Machine', sets: 2, reps: 20 }
          ]
        },
        'Day 4': {
          focus: 'Hamstrings & Glutes',
          exercises: [
            { name: 'RDLs', sets: 2, reps: 15 },
            { name: 'Hamstring Curls', sets: 2, reps: 15 },
            { name: 'Hip Thrust', sets: 2, reps: 15 }
          ]
        }
      }
    }
  },'Maintain Muscle/Gain Strength/Lose BF(Bodyfat)': {
    'Under 18': {
      name: 'Fat Loss - Junior',
      days: {
        'Day 1': {
          focus: 'Chest, Triceps & Shoulders',
          exercises: [
            { name: 'Bench Press', sets: 4, reps: 8 },
            { name: 'Incline Dumbbell Press', sets: 3, reps: 12 },
            { name: 'Tricep Pushdown', sets: 3, reps: 15 },
            { name: 'Cable Lateral Raise', sets: 3, reps: 12 },
            { name: 'Overhead Press', sets: 3, reps: 8 },
            { name: 'Inclined Treadmill', incline: 8.0, speed: 3.0, timeMinutes: 20}
          ]
        },
        'Day 2': {
          focus: 'Back & Bicep',
          exercises: [
            { name: 'Lat Pulldowns', sets: 4, reps: 8 },
            { name: 'Lat Pullovers', sets: 3, reps: 10 },
            { name: 'Chest Supported Rows', sets: 3, reps: 8 },
            { name: 'Cable Bicep Pulls', sets: 3, reps: 8 },
            { name: 'Hammer Curls', sets: 3, reps: 8 },
            { name: 'Inclined Treadmill', incline: 8.0, speed: 3.0, timeMinutes: 20}
          ]
        },
        'Day 3': {
          focus: 'Quads & Calves',
          exercises: [
            { name: 'Back Squats', sets: 4, reps: 8 },
            { name: 'Decline Leg Press', sets: 3, reps: 8 },
            { name: 'Leg Extension', sets: 3, reps: 8 },
            { name: 'Calve Raise Machine', sets: 4, reps: 8 },
            { name: 'Inclined Treadmill', incline: 8.0, speed: 3.0, timeMinutes: 20}
          ]
        },
        'Day 4': {
          focus: 'Hamstrings & Glutes',
          exercises: [
            { name: 'Deadlift', sets: 4, reps: 8 },
            { name: 'RDLs', sets: 3, reps: 8 },
            { name: 'Hamstring Curls', sets: 4, reps: 8 },
            { name: 'Hip Thrust', sets: 4, reps: 8 },
            { name: 'Inclined Treadmill', incline: 8.0, speed: 3.0, timeMinutes: 20}
          ]
        }
      }
    },
    '18-44': {
      name: 'Fat Loss - Prime',
      days: {
        'Day 1': {
          focus: 'Chest, Triceps & Shoulders',
          exercises: [
            { name: 'Bench Press', sets: 4, reps: 10 },
            { name: 'Incline Dumbbell Press', sets: 3, reps: 12 },
            { name: 'Tricep Pushdown', sets: 3, reps: 15 },
            { name: 'Cable Lateral Raise', sets: 3, reps: 12 },
            { name: 'Overhead Press', sets: 3, reps: 10 },
            { name: 'Inclined Treadmill', incline: 8.0, speed: 3.0, timeMinutes: 20}
          ]
        },
        'Day 2': {
          focus: 'Back & Bicep',
          exercises: [
            { name: 'Lat Pulldowns', sets: 4, reps: 10 },
            { name: 'Lat Pullovers', sets: 3, reps: 12 },
            { name: 'Chest Supported Rows', sets: 3, reps: 10 },
            { name: 'Cable Bicep Pulls', sets: 3, reps: 10 },
            { name: 'Hammer Curls', sets: 3, reps: 10 },
            { name: 'Inclined Treadmill', incline: 8.0, speed: 3.0, timeMinutes: 20}
          ]
        },
        'Day 3': {
          focus: 'Quads & Calves',
          exercises: [
            { name: 'Back Squats', sets: 4, reps: 10 },
            { name: 'Decline Leg Press', sets: 3, reps: 10 },
            { name: 'Leg Extension', sets: 3, reps: 10 },
            { name: 'Calve Raise Machine', sets: 4, reps: 10 },
            { name: 'Inclined Treadmill', incline: 8.0, speed: 3.0, timeMinutes: 20}
          ]
        },
        'Day 4': {
          focus: 'Hamstrings & Glutes',
          exercises: [
            { name: 'Deadlift', sets: 4, reps: 10 },
            { name: 'RDLs', sets: 3, reps: 10 },
            { name: 'Hamstring Curls', sets: 4, reps: 10 },
            { name: 'Hip Thrust', sets: 4, reps: 10 },
            { name: 'Inclined Treadmill', incline: 8.0, speed: 3.0, timeMinutes: 20}
          ]
        }
      }
    },
    '45+': {
      name: 'Fat Loss - Masters',
      days: {
        'Day 1': {
          focus: 'Chest, Triceps & Shoulders',
          exercises: [
            { name: 'Bench Press', sets: 2, reps: 15 },
            { name: 'Incline Dumbbell Press', sets: 2, reps: 15 },
            { name: 'Tricep Pushdown', sets: 2, reps: 20 },
            { name: 'Cable Lateral Raise', sets: 2, reps: 15 },
            { name: 'Overhead Press', sets: 2, reps: 15 },
            { name: 'Inclined Treadmill', incline: 8.0, speed: 3.0, timeMinutes: 15}
          ]
        },
        'Day 2': {
          focus: 'Back & Bicep',
          exercises: [
            { name: 'Lat Pulldowns', sets: 2, reps: 15 },
            { name: 'Lat Pullovers', sets: 2, reps: 15 },
            { name: 'Chest Supported Rows', sets: 2, reps: 15 },
            { name: 'Cable Bicep Pulls', sets: 2, reps: 15 },
            { name: 'Hammer Curls', sets: 2, reps: 15 },
            { name: 'Inclined Treadmill', incline: 8.0, speed: 3.0, timeMinutes: 15}
          ]
        },
        'Day 3': {
          focus: 'Quads & Calves',
          exercises: [
            { name: 'Decline Leg Press', sets: 2, reps: 15 },
            { name: 'Leg Extension', sets: 2, reps: 15 },
            { name: 'Calve Raise Machine', sets: 2, reps: 20 },
            { name: 'Inclined Treadmill', incline: 8.0, speed: 3.0, timeMinutes: 15}
          ]
        },
        'Day 4': {
          focus: 'Hamstrings & Glutes',
          exercises: [
            { name: 'RDLs', sets: 2, reps: 15 },
            { name: 'Hamstring Curls', sets: 2, reps: 15 },
            { name: 'Hip Thrust', sets: 2, reps: 15 },
            { name: 'Inclined Treadmill', incline: 8.0, speed: 3.0, timeMinutes: 15}
          ]
        }
      }
    }
  }
}

function handleTransition(input, value){
      setAnswers(prev => ({ ...prev, [value]: input}))

      const transitions = {
      GREET: { start: 'ASK_AGE'},
      ASK_AGE: { 'Under 18': 'ASK_WEIGHT', '18-44': 'ASK_WEIGHT', '45+': 'ASK_WEIGHT'},
      ASK_WEIGHT: {'Under 100lbs': 'ASK_GOAL', '100-150lbs': 'ASK_GOAL','150-175lbs': 'ASK_GOAL','175-200lbs': 'ASK_GOAL', '200lbs+': 'ASK_GOAL'},
      ASK_GOAL: {'Lose BF(BodyFat)/Gain Muscle': 'RECOMMEND','Gain Muscle/Strength/Maintain BF(BodyFat)': 'RECOMMEND','Maintain Muscle/Gain Strength/Lose BF(Bodyfat)': 'RECOMMEND'},
      RECOMMEND: { restart: 'GREET'}
    }

    const nextState = transitions[currentState][input]
    if(nextState) setCurrentState(nextState)
}
    

    

  return (
    <>
    <div className="flex flex-col bg-black min-h-screen flex-1">
      <Background/>

    <div className="flex items-center justify-center flex-1 relative z-10">
  {currentState === 'GREET' && (
    
    <div className="flex flex-col border border-green-400 rounded-2xl w-full max-w-3xl">
  
  <div className="flex gap-2 border border-b-green-800 w-full p-4">
  <Dumbbell size={45} strokeWidth={2.0} className=' bg-green-400 rounded-full p-2 rotate-90 items-center'/>
   
  <h1 className="text-white text-2xl font-bold mt-1"> 
     DYNAMI
  </h1>
  </div>


  <div className="flex flex-col items-center gap-4">
    <p className="text-gray-400">Let's build your perfect workout</p>
    <button
      onClick={() => handleTransition('start', null)}
      className="bg-green-400 text-black px-8 py-3 rounded-2xl text-xl">
      Get Started
    </button>
  </div>

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
        <button onClick={() => handleTransition('100-150lbs', 'weight')} className="border border-green-400 text-white px-6 py-3 rounded-2xl">100-150lbs</button>
        <button onClick={() => handleTransition('150-175lbs', 'weight')} className="border border-green-400 text-white px-6 py-3 rounded-2xl">150-175lbs</button>
        <button onClick={() => handleTransition('175-200lbs', 'weight')} className="border border-green-400 text-white px-6 py-3 rounded-2xl">175-200lbs</button>
        <button onClick={() => handleTransition('200lbs+', 'weight')} className="border border-green-400 text-white px-6 py-3 rounded-2xl">200lbs+</button>
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
    <>
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-white text-4xl pt-8 text-center">{workouts[answers.goals]?.[answers.age]?.name}
        <br/>
        <h1 className="text-green-400 text-center p-4">━━━━━━━━━━━━━━━━</h1>
        </h1>
      
      <div className="grid grid-cols-2 justify-center items-center gap-4 ">
      {Object.entries(workouts[answers.goals]?.[answers.age]?.days || {}).map(([day,data]) => (
        <div key={day} className="border border-green-400 rounded-2xl p-6 w-full">
          <h2 className="text-green-400 text-2xl mb-1 underline">{day}</h2>
          <p className="text-gray-400 mb-4">{data.focus}</p>
          {data.exercises.map((exercises, index) => (
            <div key={index} className="flex justify-between text-white py-2 border-b border-gray-800 gap-3">
              <span>{exercises.name}</span>
              <span className="text-green-400">
                {exercises.sets
                ? `${exercises.sets} sets x ${exercises.reps} reps`
                : `${exercises.timeMinutes} mins @ incline ${exercises.incline}`}
              </span>
            </div>
             
          ))}
        </div>
      ))}
      
          
        </div>
        <h1 className="text-green-400 text-center text-4xl">━━━━━━━━━━━━━━━━</h1>
        <div className="pb-8">
        <button onClick={() => handleTransition('restart', null)} className="flex justify-center bg-gradient-to-br from-green-400 to-green-700 hover:scale-110 rounded-2xl p-2 mt-5 relative z-10 transition-all duration-200 ">
          <h1 className={`${beba.className} text-3xl w-3xs text-center`}>Start Over</h1>
        </button>
        </div>
      </div>
      </>
      
  )}
    
</div>
    </div>
    </>
  )
}