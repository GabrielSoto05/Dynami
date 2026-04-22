'use client'

import Background from "@/app/Components/Background"
import { useState, useEffect } from 'react'
import { Dumbbell } from "lucide-react";
import { motion, AnimatePresence } from 'motion/react'


import { Bebas_Neue } from 'next/font/google';

const beba = Bebas_Neue({ weight: '400', subsets: ['latin'] });

export default function Chatbot() {

    const [currentState, setCurrentState] = useState('GREET')

    const [answers, setAnswers] = useState({
      age: null,
      weight: null,
      goals: null
    })

    const [messages, setMessages] = useState([])

    const [isLoading, setLoading] = useState(false);  

    const [loadingMessage, setLoadingMessage] = useState('Analyzing your information...')

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

const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  };

function handleTransition(input, value){
      setAnswers(prev => ({ ...prev, [value]: input}))


      const transitions = {
      GREET: { start: 'STARTING'},
      STARTING: {'Yes': 'ASK_AGE', 'No': 'STARTING'},
      ASK_AGE: { 'Under 18': 'ASK_WEIGHT', '18-44': 'ASK_WEIGHT', '45+': 'ASK_WEIGHT'},
      ASK_WEIGHT: {'Under 100lbs': 'ASK_GOAL', '100-150lbs': 'ASK_GOAL','150-175lbs': 'ASK_GOAL','175-200lbs': 'ASK_GOAL', '200lbs+': 'ASK_GOAL'},
      ASK_GOAL: {'Lose BF(BodyFat)/Gain Muscle': 'RECOMMEND','Gain Muscle/Strength/Maintain BF(BodyFat)': 'RECOMMEND','Maintain Muscle/Gain Strength/Lose BF(Bodyfat)': 'RECOMMEND'},
      RECOMMEND: { restart: 'GREET'}
    }

    const nextState = transitions[currentState][input]

    const botResponses = {
       STARTING: "Ok, no worries! Whenever you're ready just press Yes!",
      ASK_AGE: 'Alrighty. First things first, how old are you?',
      ASK_WEIGHT: 'Got it. Now, how much do you weigh?',
      ASK_GOAL: 'Great! Whats your main goal?',
      RECOMMEND: 'Perfect here is your personalized workout.'
    }

    if(input === 'restart') {
    setMessages([{ from: 'bot', text: "Welcome! I'm Dynami, your personal workout chatbot. Ready to start?" }])
    setAnswers({ age: null, weight: null, goals: null })
    setCurrentState('STARTING')
    return
  }

    if(input !== 'start' && input !== 'restart'){
      setMessages(prev => [...prev, {from: 'user', text: input}])
    }

    if(nextState && botResponses[nextState]){
      setMessages(prev => [...prev, { from: 'bot', text: botResponses[nextState]}])
    }

    if(nextState === 'GREET'){
      setMessages([])
      setAnswers({age: null, weight: null, goals: null})
      setCurrentState('STARTING')
      return
    }

    if(nextState === 'RECOMMEND'){
      setLoading(true)
      setLoadingMessage('Analyzing ur information...')

      setTimeout(() => setLoadingMessage('Selecting your exercises...'), 1250)
      setTimeout(() => setLoadingMessage('Optimizing Intensity...'), 2500)
      setTimeout(() => setLoadingMessage('Finalizing...'), 3750)
      
      setTimeout(() => {
        setLoading(false)
        setCurrentState('RECOMMEND')
      }, 5000)
      return
    }

   

    
    if(nextState) setCurrentState(nextState)
    
}

 useEffect(() => {
      setMessages([{from: 'bot', text: 'Welcome im Dynami! Your Personal Workout Chatbot. Ready to start?'}])
      setCurrentState('STARTING')
    }, [])
  
  return (
    <>
  <div className="flex flex-col bg-black min-h-screen">
    <Background/>

    <div className="flex-1 flex items-center justify-center relative z-10 p-8">

       
      {isLoading && (
  <div className="flex flex-col items-center justify-center gap-8 w-full max-w-sm">
    
    
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
    >
      <Dumbbell size={80} strokeWidth={1.5} className='bg-green-400 rounded-full p-2 rotate-90'/>
    </motion.div>

   
    <AnimatePresence mode="wait">
      <motion.p
        key={loadingMessage}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4 }}
        className="text-gray-400 text-lg"
      >
        {loadingMessage}
      </motion.p>
    </AnimatePresence>

 
    <div className="w-full bg-gray-900 rounded-full h-2 overflow-hidden">
      <motion.div
        className="h-full bg-green-400 rounded-full"
        initial={{ width: '0%' }}
        animate={{ width: '100%' }}
        transition={{ duration: 5, ease: 'linear' }}
      />
    </div>

      </div>
    )}

      
      {!isLoading && currentState !== 'RECOMMEND' && (
        <motion.div 
        className="flex flex-col border border-green-400/30 rounded-2xl w-full max-w-2xl h-[600px]"
        variants={containerVariants}
        initial="hidden"
        animate="visible">
          
         
          <div className="flex gap-2 border-b border-green-400/20 w-full p-4 items-center">
            <Dumbbell size={36} strokeWidth={2.0} className='bg-green-400 rounded-full p-2 rotate-90'/>
            <h1 className="text-white text-xl font-bold">DYNAMI</h1>
          </div>

        
          <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-3">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`px-4 py-3 rounded-2xl max-w-xs text-sm 
                  ${msg.from === 'bot'
                    ? 'bg-gray-900 border border-green-400/20 text-white rounded-bl-none'
                    : 'bg-green-400 text-black rounded-br-none'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

         
          <div className="p-4 border-t border-green-400/20 flex flex-wrap gap-3 justify-center">
            {currentState === 'STARTING' && (
              <>
                <button onClick={() => handleTransition('Yes', null)} className="border border-green-400 text-green-400 px-4 py-2 rounded-full text-sm hover:scale-105 transition-all duration-200">Yes</button>
                <button onClick={() => handleTransition('No', null)} className="border border-green-400 text-green-400 px-4 py-2 rounded-full text-sm hover:scale-105 transition-all duration-200">No</button>
              </>
            )}
            {currentState === 'ASK_AGE' && (
              <>
                <button onClick={() => handleTransition('Under 18', 'age')} className="border border-green-400 text-green-400 px-4 py-2 rounded-full text-sm hover:scale-105 transition-all duration-200">Under 18</button>
                <button onClick={() => handleTransition('18-44', 'age')} className="border border-green-400 text-green-400 px-4 py-2 rounded-full text-sm hover:scale-105 transition-all duration-200">18-44</button>
                <button onClick={() => handleTransition('45+', 'age')} className="border border-green-400 text-green-400 px-4 py-2 rounded-full text-sm hover:scale-105 transition-all duration-200">45+</button>
              </>
            )}
            {currentState === 'ASK_WEIGHT' && (
              <>
                <button onClick={() => handleTransition('Under 100lbs', 'weight')} className="border border-green-400 text-green-400 px-4 py-2 rounded-full text-sm hover:scale-105 transition-all duration-200">Under 100lbs</button>
                <button onClick={() => handleTransition('100-150lbs', 'weight')} className="border border-green-400 text-green-400 px-4 py-2 rounded-full text-sm hover:scale-105 transition-all duration-200">100-150lbs</button>
                <button onClick={() => handleTransition('150-175lbs', 'weight')} className="border border-green-400 text-green-400 px-4 py-2 rounded-full text-sm hover:scale-105 transition-all duration-200">150-175lbs</button>
                <button onClick={() => handleTransition('175-200lbs', 'weight')} className="border border-green-400 text-green-400 px-4 py-2 rounded-full text-sm hover:scale-105 transition-all duration-200">175-200lbs</button>
                <button onClick={() => handleTransition('200lbs+', 'weight')} className="border border-green-400 text-green-400 px-4 py-2 rounded-full text-sm hover:scale-105 transition-all duration-200">200lbs+</button>
              </>
            )}
            {currentState === 'ASK_GOAL' && (
              <>
                <button onClick={() => handleTransition('Lose BF(BodyFat)/Gain Muscle', 'goals')} className="border border-green-400 text-green-400 px-4 py-2 rounded-full text-sm hover:scale-105 transition-all duration-200">Lose BF / Gain Muscle</button>
                <button onClick={() => handleTransition('Gain Muscle/Strength/Maintain BF(BodyFat)', 'goals')} className="border border-green-400 text-green-400 px-4 py-2 rounded-full text-sm hover:scale-105 transition-all duration-200">Gain Muscle & Maintain BF</button>
                <button onClick={() => handleTransition('Maintain Muscle/Gain Strength/Lose BF(Bodyfat)', 'goals')} className="border border-green-400 text-green-400 px-4 py-2 rounded-full text-sm hover:scale-105 transition-all duration-200">Maintain Muscle / Lose BF</button>
              </>
            )}
          </div>

        </motion.div>
      )}

      {!isLoading && currentState === 'RECOMMEND' && (
        <motion.div 
        className="flex flex-col items-center gap-6 p-8 overflow-y-auto w-full max-w-4xl"
        variants={itemVariants}
        initial="hidden"
        animate="visible">
          <h1 className="text-white text-4xl">{workouts[answers.goals]?.[answers.age]?.name}</h1>
          <div className="grid grid-cols-2 gap-4 w-full">
            {Object.entries(workouts[answers.goals]?.[answers.age]?.days || {}).map(([day, data]) => (
              <motion.div 
              key={day} 
              className="border border-green-400 rounded-2xl p-6 hover:scale-105 transition-all duration-200"
              animate="visible"
              initial="hidden">
                <h2 className="text-green-400 text-2xl mb-1">{day}</h2>
                <p className="text-gray-400 mb-4">{data.focus}</p>
                {data.exercises.map((exercise, index) => (
                  <div key={index} className="flex justify-between text-white py-2 border-b border-gray-800 gap-3">
                    <span>{exercise.name}</span>
                    <span className="text-green-400">
                      {exercise.sets
                        ? `${exercise.sets} sets x ${exercise.reps} reps`
                        : `${exercise.timeMinutes} mins @ incline ${exercise.incline}`}
                    </span>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
          <button onClick={() => handleTransition('restart', null)} className="bg-green-400 text-black px-8 py-3 rounded-2xl text-xl hover:scale-105 transition-all duration-200">
            Start Over
          </button>
        </motion.div>
      )}

    </div>
  </div>

    </>
  )
}