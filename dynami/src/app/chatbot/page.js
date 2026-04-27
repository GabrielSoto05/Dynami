'use client'

import Background from "@/app/Components/Background"
import { useState, useEffect, useRef } from 'react'
import { Dumbbell } from "lucide-react";
import { motion, AnimatePresence } from 'motion/react'

import { Bebas_Neue } from 'next/font/google';
const beba = Bebas_Neue({ weight: '400', subsets: ['latin'] });

export default function Chatbot() {

  const [currentState, setCurrentState]     = useState('GREET')
  const [answers, setAnswers]               = useState({ age: null, weight: null, goals: null })
  const [messages, setMessages]             = useState([])
  const [isLoading, setLoading]             = useState(false)
  const [loadingMessage, setLoadingMessage] = useState('Analyzing your information...')
  const messagesEndRef                      = useRef(null)

 
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

 
  const workouts = {
    'Lose BF(BodyFat)/Gain Muscle': {
      'Under 18': {
        name: 'Body Recomp - Junior',
        days: {
          'Day 1': { focus: 'Chest, Triceps & Shoulders', exercises: [
            { name: 'Push-ups', sets: 4, reps: 10 },
            { name: 'Cable Flies', sets: 3, reps: 12 },
            { name: 'Tricep Pushdown', sets: 3, reps: 15 },
            { name: 'Cable Lateral Raise', sets: 3, reps: 12 },
            { name: 'Overhead Press', sets: 3, reps: 8 },
            { name: 'Inclined Treadmill', incline: 10.0, timeMinutes: 25 }
          ]},
          'Day 2': { focus: 'Back & Bicep', exercises: [
            { name: 'Lat Pulldowns', sets: 4, reps: 8 },
            { name: 'Lat Pullovers', sets: 3, reps: 10 },
            { name: 'Chest Supported Rows', sets: 3, reps: 8 },
            { name: 'Cable Bicep Pulls', sets: 3, reps: 8 },
            { name: 'Hammer Curls', sets: 3, reps: 8 },
            { name: 'Inclined Treadmill', incline: 10.0, timeMinutes: 25 }
          ]},
          'Day 3': { focus: 'Quads & Calves', exercises: [
            { name: 'Back Squats', sets: 4, reps: 8 },
            { name: 'Decline Leg Press', sets: 3, reps: 8 },
            { name: 'Leg Extension', sets: 3, reps: 8 },
            { name: 'Calve Raise Machine', sets: 4, reps: 8 },
            { name: 'Inclined Treadmill', incline: 10.0, timeMinutes: 25 }
          ]},
          'Day 4': { focus: 'Hamstrings & Glutes', exercises: [
            { name: 'Deadlift', sets: 4, reps: 8 },
            { name: 'RDLs', sets: 3, reps: 8 },
            { name: 'Hamstring Curls', sets: 4, reps: 8 },
            { name: 'Hip Thrust', sets: 4, reps: 8 },
            { name: 'Inclined Treadmill', incline: 10.0, timeMinutes: 25 }
          ]}
        }
      },
      '18-44': {
        name: 'Body Recomp - Prime',
        days: {
          'Day 1': { focus: 'Chest, Triceps & Shoulders', exercises: [
            { name: 'Bench Press', sets: 4, reps: 10 },
            { name: 'Incline Dumbbell Press', sets: 3, reps: 12 },
            { name: 'Tricep Pushdown', sets: 3, reps: 15 },
            { name: 'Cable Lateral Raise', sets: 3, reps: 12 },
            { name: 'Overhead Press', sets: 3, reps: 10 },
            { name: 'Inclined Treadmill', incline: 10.0, timeMinutes: 30 }
          ]},
          'Day 2': { focus: 'Back & Bicep', exercises: [
            { name: 'Lat Pulldowns', sets: 4, reps: 10 },
            { name: 'Lat Pullovers', sets: 3, reps: 12 },
            { name: 'Chest Supported Rows', sets: 3, reps: 10 },
            { name: 'Cable Bicep Pulls', sets: 3, reps: 10 },
            { name: 'Hammer Curls', sets: 3, reps: 10 },
            { name: 'Inclined Treadmill', incline: 10.0, timeMinutes: 30 }
          ]},
          'Day 3': { focus: 'Quads & Calves', exercises: [
            { name: 'Back Squats', sets: 4, reps: 10 },
            { name: 'Decline Leg Press', sets: 3, reps: 10 },
            { name: 'Leg Extension', sets: 3, reps: 10 },
            { name: 'Calve Raise Machine', sets: 4, reps: 10 },
            { name: 'Inclined Treadmill', incline: 10.0, timeMinutes: 30 }
          ]},
          'Day 4': { focus: 'Hamstrings & Glutes', exercises: [
            { name: 'Deadlift', sets: 4, reps: 10 },
            { name: 'RDLs', sets: 3, reps: 10 },
            { name: 'Hamstring Curls', sets: 4, reps: 10 },
            { name: 'Hip Thrust', sets: 4, reps: 10 },
            { name: 'Inclined Treadmill', incline: 10.0, timeMinutes: 30 }
          ]}
        }
      },
      '45+': {
        name: 'Body Recomp - Masters',
        days: {
          'Day 1': { focus: 'Chest, Triceps & Shoulders', exercises: [
            { name: 'Bench Press', sets: 2, reps: 15 },
            { name: 'Incline Dumbbell Press', sets: 2, reps: 15 },
            { name: 'Tricep Pushdown', sets: 2, reps: 20 },
            { name: 'Cable Lateral Raise', sets: 2, reps: 15 },
            { name: 'Overhead Press', sets: 2, reps: 15 },
            { name: 'Inclined Treadmill', incline: 8.0, timeMinutes: 15 }
          ]},
          'Day 2': { focus: 'Back & Bicep', exercises: [
            { name: 'Lat Pulldowns', sets: 2, reps: 15 },
            { name: 'Lat Pullovers', sets: 2, reps: 15 },
            { name: 'Chest Supported Rows', sets: 2, reps: 15 },
            { name: 'Cable Bicep Pulls', sets: 2, reps: 15 },
            { name: 'Hammer Curls', sets: 2, reps: 15 },
            { name: 'Inclined Treadmill', incline: 8.0, timeMinutes: 15 }
          ]},
          'Day 3': { focus: 'Quads & Calves', exercises: [
            { name: 'Decline Leg Press', sets: 2, reps: 15 },
            { name: 'Leg Extension', sets: 2, reps: 15 },
            { name: 'Calve Raise Machine', sets: 2, reps: 20 },
            { name: 'Inclined Treadmill', incline: 8.0, timeMinutes: 15 }
          ]},
          'Day 4': { focus: 'Hamstrings & Glutes', exercises: [
            { name: 'RDLs', sets: 2, reps: 15 },
            { name: 'Hamstring Curls', sets: 2, reps: 15 },
            { name: 'Hip Thrust', sets: 2, reps: 15 },
            { name: 'Inclined Treadmill', incline: 8.0, timeMinutes: 15 }
          ]}
        }
      }
    },
    'Gain Muscle/Strength/Maintain BF(BodyFat)': {
      'Under 18': {
        name: 'Strength Overload - Junior',
        days: {
          'Day 1': { focus: 'Chest, Triceps & Shoulders', exercises: [
            { name: 'Bench Press', sets: 4, reps: 8 },
            { name: 'Incline Dumbbell Press', sets: 3, reps: 12 },
            { name: 'Tricep Pushdown', sets: 3, reps: 15 },
            { name: 'Cable Lateral Raise', sets: 3, reps: 12 },
            { name: 'Overhead Press', sets: 3, reps: 8 }
          ]},
          'Day 2': { focus: 'Back & Bicep', exercises: [
            { name: 'Lat Pulldowns', sets: 4, reps: 8 },
            { name: 'Lat Pullovers', sets: 3, reps: 10 },
            { name: 'Chest Supported Rows', sets: 3, reps: 8 },
            { name: 'Cable Bicep Pulls', sets: 3, reps: 8 },
            { name: 'Hammer Curls', sets: 3, reps: 8 }
          ]},
          'Day 3': { focus: 'Quads & Calves', exercises: [
            { name: 'Back Squats', sets: 4, reps: 8 },
            { name: 'Decline Leg Press', sets: 3, reps: 8 },
            { name: 'Leg Extension', sets: 3, reps: 8 },
            { name: 'Calve Raise Machine', sets: 4, reps: 8 }
          ]},
          'Day 4': { focus: 'Hamstrings & Glutes', exercises: [
            { name: 'Deadlift', sets: 4, reps: 8 },
            { name: 'RDLs', sets: 3, reps: 8 },
            { name: 'Hamstring Curls', sets: 4, reps: 8 },
            { name: 'Hip Thrust', sets: 4, reps: 8 }
          ]}
        }
      },
      '18-44': {
        name: 'Strength Overload - Prime',
        days: {
          'Day 1': { focus: 'Chest, Triceps & Shoulders', exercises: [
            { name: 'Bench Press', sets: 4, reps: 10 },
            { name: 'Incline Dumbbell Press', sets: 3, reps: 12 },
            { name: 'Tricep Pushdown', sets: 3, reps: 15 },
            { name: 'Cable Lateral Raise', sets: 3, reps: 12 },
            { name: 'Overhead Press', sets: 3, reps: 10 }
          ]},
          'Day 2': { focus: 'Back & Bicep', exercises: [
            { name: 'Lat Pulldowns', sets: 4, reps: 10 },
            { name: 'Lat Pullovers', sets: 3, reps: 12 },
            { name: 'Chest Supported Rows', sets: 3, reps: 10 },
            { name: 'Cable Bicep Pulls', sets: 3, reps: 10 },
            { name: 'Hammer Curls', sets: 3, reps: 10 }
          ]},
          'Day 3': { focus: 'Quads & Calves', exercises: [
            { name: 'Back Squats', sets: 4, reps: 10 },
            { name: 'Decline Leg Press', sets: 3, reps: 10 },
            { name: 'Leg Extension', sets: 3, reps: 10 },
            { name: 'Calve Raise Machine', sets: 4, reps: 10 }
          ]},
          'Day 4': { focus: 'Hamstrings & Glutes', exercises: [
            { name: 'Deadlift', sets: 4, reps: 10 },
            { name: 'RDLs', sets: 3, reps: 10 },
            { name: 'Hamstring Curls', sets: 4, reps: 10 },
            { name: 'Hip Thrust', sets: 4, reps: 10 }
          ]}
        }
      },
      '45+': {
        name: 'Strength Overload - Masters',
        days: {
          'Day 1': { focus: 'Chest, Triceps & Shoulders', exercises: [
            { name: 'Bench Press', sets: 2, reps: 15 },
            { name: 'Incline Dumbbell Press', sets: 2, reps: 15 },
            { name: 'Tricep Pushdown', sets: 2, reps: 20 },
            { name: 'Cable Lateral Raise', sets: 2, reps: 15 },
            { name: 'Overhead Press', sets: 2, reps: 15 }
          ]},
          'Day 2': { focus: 'Back & Bicep', exercises: [
            { name: 'Lat Pulldowns', sets: 2, reps: 15 },
            { name: 'Lat Pullovers', sets: 2, reps: 15 },
            { name: 'Chest Supported Rows', sets: 2, reps: 15 },
            { name: 'Cable Bicep Pulls', sets: 2, reps: 15 },
            { name: 'Hammer Curls', sets: 2, reps: 15 }
          ]},
          'Day 3': { focus: 'Quads & Calves', exercises: [
            { name: 'Decline Leg Press', sets: 2, reps: 15 },
            { name: 'Leg Extension', sets: 2, reps: 15 },
            { name: 'Calve Raise Machine', sets: 2, reps: 20 }
          ]},
          'Day 4': { focus: 'Hamstrings & Glutes', exercises: [
            { name: 'RDLs', sets: 2, reps: 15 },
            { name: 'Hamstring Curls', sets: 2, reps: 15 },
            { name: 'Hip Thrust', sets: 2, reps: 15 }
          ]}
        }
      }
    },
    'Maintain Muscle/Gain Strength/Lose BF(Bodyfat)': {
      'Under 18': {
        name: 'Fat Loss - Junior',
        days: {
          'Day 1': { focus: 'Chest, Triceps & Shoulders', exercises: [
            { name: 'Bench Press', sets: 4, reps: 8 },
            { name: 'Incline Dumbbell Press', sets: 3, reps: 12 },
            { name: 'Tricep Pushdown', sets: 3, reps: 15 },
            { name: 'Cable Lateral Raise', sets: 3, reps: 12 },
            { name: 'Overhead Press', sets: 3, reps: 8 },
            { name: 'Inclined Treadmill', incline: 8.0, speed: 3.0, timeMinutes: 20 }
          ]},
          'Day 2': { focus: 'Back & Bicep', exercises: [
            { name: 'Lat Pulldowns', sets: 4, reps: 8 },
            { name: 'Lat Pullovers', sets: 3, reps: 10 },
            { name: 'Chest Supported Rows', sets: 3, reps: 8 },
            { name: 'Cable Bicep Pulls', sets: 3, reps: 8 },
            { name: 'Hammer Curls', sets: 3, reps: 8 },
            { name: 'Inclined Treadmill', incline: 8.0, speed: 3.0, timeMinutes: 20 }
          ]},
          'Day 3': { focus: 'Quads & Calves', exercises: [
            { name: 'Back Squats', sets: 4, reps: 8 },
            { name: 'Decline Leg Press', sets: 3, reps: 8 },
            { name: 'Leg Extension', sets: 3, reps: 8 },
            { name: 'Calve Raise Machine', sets: 4, reps: 8 },
            { name: 'Inclined Treadmill', incline: 8.0, speed: 3.0, timeMinutes: 20 }
          ]},
          'Day 4': { focus: 'Hamstrings & Glutes', exercises: [
            { name: 'Deadlift', sets: 4, reps: 8 },
            { name: 'RDLs', sets: 3, reps: 8 },
            { name: 'Hamstring Curls', sets: 4, reps: 8 },
            { name: 'Hip Thrust', sets: 4, reps: 8 },
            { name: 'Inclined Treadmill', incline: 8.0, speed: 3.0, timeMinutes: 20 }
          ]}
        }
      },
      '18-44': {
        name: 'Fat Loss - Prime',
        days: {
          'Day 1': { focus: 'Chest, Triceps & Shoulders', exercises: [
            { name: 'Bench Press', sets: 4, reps: 10 },
            { name: 'Incline Dumbbell Press', sets: 3, reps: 12 },
            { name: 'Tricep Pushdown', sets: 3, reps: 15 },
            { name: 'Cable Lateral Raise', sets: 3, reps: 12 },
            { name: 'Overhead Press', sets: 3, reps: 10 },
            { name: 'Inclined Treadmill', incline: 8.0, speed: 3.0, timeMinutes: 20 }
          ]},
          'Day 2': { focus: 'Back & Bicep', exercises: [
            { name: 'Lat Pulldowns', sets: 4, reps: 10 },
            { name: 'Lat Pullovers', sets: 3, reps: 12 },
            { name: 'Chest Supported Rows', sets: 3, reps: 10 },
            { name: 'Cable Bicep Pulls', sets: 3, reps: 10 },
            { name: 'Hammer Curls', sets: 3, reps: 10 },
            { name: 'Inclined Treadmill', incline: 8.0, speed: 3.0, timeMinutes: 20 }
          ]},
          'Day 3': { focus: 'Quads & Calves', exercises: [
            { name: 'Back Squats', sets: 4, reps: 10 },
            { name: 'Decline Leg Press', sets: 3, reps: 10 },
            { name: 'Leg Extension', sets: 3, reps: 10 },
            { name: 'Calve Raise Machine', sets: 4, reps: 10 },
            { name: 'Inclined Treadmill', incline: 8.0, speed: 3.0, timeMinutes: 20 }
          ]},
          'Day 4': { focus: 'Hamstrings & Glutes', exercises: [
            { name: 'Deadlift', sets: 4, reps: 10 },
            { name: 'RDLs', sets: 3, reps: 10 },
            { name: 'Hamstring Curls', sets: 4, reps: 10 },
            { name: 'Hip Thrust', sets: 4, reps: 10 },
            { name: 'Inclined Treadmill', incline: 8.0, speed: 3.0, timeMinutes: 20 }
          ]}
        }
      },
      '45+': {
        name: 'Fat Loss - Masters',
        days: {
          'Day 1': { focus: 'Chest, Triceps & Shoulders', exercises: [
            { name: 'Bench Press', sets: 2, reps: 15 },
            { name: 'Incline Dumbbell Press', sets: 2, reps: 15 },
            { name: 'Tricep Pushdown', sets: 2, reps: 20 },
            { name: 'Cable Lateral Raise', sets: 2, reps: 15 },
            { name: 'Overhead Press', sets: 2, reps: 15 },
            { name: 'Inclined Treadmill', incline: 8.0, speed: 3.0, timeMinutes: 15 }
          ]},
          'Day 2': { focus: 'Back & Bicep', exercises: [
            { name: 'Lat Pulldowns', sets: 2, reps: 15 },
            { name: 'Lat Pullovers', sets: 2, reps: 15 },
            { name: 'Chest Supported Rows', sets: 2, reps: 15 },
            { name: 'Cable Bicep Pulls', sets: 2, reps: 15 },
            { name: 'Hammer Curls', sets: 2, reps: 15 },
            { name: 'Inclined Treadmill', incline: 8.0, speed: 3.0, timeMinutes: 15 }
          ]},
          'Day 3': { focus: 'Quads & Calves', exercises: [
            { name: 'Decline Leg Press', sets: 2, reps: 15 },
            { name: 'Leg Extension', sets: 2, reps: 15 },
            { name: 'Calve Raise Machine', sets: 2, reps: 20 },
            { name: 'Inclined Treadmill', incline: 8.0, speed: 3.0, timeMinutes: 15 }
          ]},
          'Day 4': { focus: 'Hamstrings & Glutes', exercises: [
            { name: 'RDLs', sets: 2, reps: 15 },
            { name: 'Hamstring Curls', sets: 2, reps: 15 },
            { name: 'Hip Thrust', sets: 2, reps: 15 },
            { name: 'Inclined Treadmill', incline: 8.0, speed: 3.0, timeMinutes: 15 }
          ]}
        }
      }
    }
  }

  const chatWindowVariants = {
    hidden:  { opacity: 0, y: 40, scale: 0.97 },
    visible: { opacity: 1, y: 0, scale: 1,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
    exit:    { opacity: 0, y: -30, scale: 0.96,
      transition: { duration: 0.3, ease: 'easeIn' } }
  }

  const messageBubbleVariants = {
    hidden:  (isUser) => ({ opacity: 0, x: isUser ? 30 : -30, scale: 0.9 }),
    visible: { opacity: 1, x: 0, scale: 1,
      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }
  }

  const buttonGroupVariants = {
    hidden:  { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0,
      transition: { duration: 0.35, staggerChildren: 0.07, delayChildren: 0.1 } }
  }

  const buttonVariants = {
    hidden:  { opacity: 0, y: 10, scale: 0.92 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.25 } }
  }

  const recommendVariants = {
    hidden:  { opacity: 0 },
    visible: { opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.15 } }
  }

  const cardVariants = {
    hidden:  { opacity: 0, y: 32, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }
  }

  const exerciseRowVariants = {
    hidden:  { opacity: 0, x: -12 },
    visible: (i) => ({ opacity: 1, x: 0,
      transition: { duration: 0.25, delay: i * 0.04 } })
  }

  const titleVariants = {
    hidden:  { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
  }

 

  function handleTransition(input, value) {
    setAnswers(prev => ({ ...prev, [value]: input }))

    const transitions = {
      GREET:      { start: 'STARTING' },
      STARTING:   { 'Yes': 'ASK_AGE', 'No': 'STARTING' },
      ASK_AGE:    { 'Under 18': 'ASK_WEIGHT', '18-44': 'ASK_WEIGHT', '45+': 'ASK_WEIGHT' },
      ASK_WEIGHT: { 'Under 100lbs': 'ASK_GOAL', '100-150lbs': 'ASK_GOAL', '150-175lbs': 'ASK_GOAL', '175-200lbs': 'ASK_GOAL', '200lbs+': 'ASK_GOAL' },
      ASK_GOAL:   { 'Lose BF(BodyFat)/Gain Muscle': 'RECOMMEND', 'Gain Muscle/Strength/Maintain BF(BodyFat)': 'RECOMMEND', 'Maintain Muscle/Gain Strength/Lose BF(Bodyfat)': 'RECOMMEND' },
      RECOMMEND:  { restart: 'GREET' }
    }

    const nextState = transitions[currentState][input]

    const botResponses = {
      STARTING:   "Ok, no worries! Whenever you're ready just press Yes!",
      ASK_AGE:    'Alrighty. First things first, how old are you?',
      ASK_WEIGHT: 'Got it. Now, how much do you weigh?',
      ASK_GOAL:   'Great! Whats your main goal?',
      RECOMMEND:  'Perfect here is your personalized workout.'
    }

    if (input === 'restart') {
      setMessages([{ from: 'bot', text: "Welcome! I'm Dynami, your personal workout chatbot. Ready to start?" }])
      setAnswers({ age: null, weight: null, goals: null })
      setCurrentState('STARTING')
      return
    }

    if (input !== 'start' && input !== 'restart') {
      setMessages(prev => [...prev, { from: 'user', text: input }])
    }

    if (nextState && botResponses[nextState]) {
      setMessages(prev => [...prev, { from: 'bot', text: botResponses[nextState] }])
    }

    if (nextState === 'GREET') {
      setMessages([])
      setAnswers({ age: null, weight: null, goals: null })
      setCurrentState('STARTING')
      return
    }

    if (nextState === 'RECOMMEND') {
      setLoading(true)
      setLoadingMessage('Analyzing ur information...')
      setTimeout(() => setLoadingMessage('Selecting your exercises...'), 1250)
      setTimeout(() => setLoadingMessage('Optimizing Intensity...'),     2500)
      setTimeout(() => setLoadingMessage('Finalizing...'),               3750)
      setTimeout(() => { setLoading(false); setCurrentState('RECOMMEND') }, 5000)
      return
    }

    if (nextState) setCurrentState(nextState)
  }

  useEffect(() => {
    setMessages([{ from: 'bot', text: 'Welcome im Dynami! Your Personal Workout Chatbot. Ready to start?' }])
    setCurrentState('STARTING')
  }, [])

  

  return (
    <>
      <div className="flex flex-col bg-black min-h-screen">
        <Background />

        <div className="flex-1 flex items-center justify-center relative z-10 p-3 sm:p-6 md:p-8">

       
          <AnimatePresence>
            {isLoading && (
              <motion.div
                key="loading"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center justify-center gap-6 sm:gap-8 w-full max-w-xs sm:max-w-sm px-4"
              >
         
                <div className="relative flex items-center justify-center">
                  <motion.div
                    className="absolute w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-green-400/30"
                    animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <motion.div
                    className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-green-400/20"
                    animate={{ scale: [1, 1.6, 1], opacity: [0.2, 0, 0.2] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                  />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  >
                    <Dumbbell
                      size={80}
                      strokeWidth={1.5}
                      className="bg-gradient-to-br from-green-400 to-green-700 rounded-full p-2 rotate-90"
                    />
                  </motion.div>
                </div>

            
                <AnimatePresence mode="wait">
                  <motion.p
                    key={loadingMessage}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="text-gray-400 text-base sm:text-lg text-center"
                  >
                    {loadingMessage}
                  </motion.p>
                </AnimatePresence>

          
                <div className="w-full bg-gray-900 rounded-full h-1.5 overflow-hidden">
                  <motion.div
                    className="h-full bg-green-400 rounded-full"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 5, ease: 'linear' }}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        
          <AnimatePresence mode="wait">
            {!isLoading && currentState !== 'RECOMMEND' && (
              <motion.div
                key="chat"
                className="flex flex-col border border-green-400/30 rounded-2xl w-full max-w-2xl"
                style={{ height: 'clamp(480px, 85vh, 620px)' }}
                variants={chatWindowVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
             
                <motion.div
                  className="flex gap-2 border-b border-green-400/20 w-full p-3 sm:p-4 items-center shrink-0"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.35 }}
                >
                  <motion.div
                    whileHover={{ rotate: [0, -15, 15, 0], transition: { duration: 0.4 } }}
                  >
                    <Dumbbell
                      size={36}
                      strokeWidth={2.0}
                      className="bg-gradient-to-br from-green-400 to-green-700 rounded-full p-2 rotate-90"
                    />
                  </motion.div>
                  <h1 className="text-white text-lg sm:text-xl font-bold tracking-wide">DYNAMI</h1>

                
                  <div className="ml-auto flex items-center gap-1.5">
                    <motion.div
                      className="w-2 h-2 rounded-full bg-green-400"
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 1.8, repeat: Infinity }}
                    />
                    <span className="text-green-400/60 text-xs hidden sm:inline">online</span>
                  </div>
                </motion.div>

             
                <div className="flex-1 overflow-y-auto p-3 sm:p-6 flex flex-col gap-3 min-h-0">
                  <AnimatePresence initial={false}>
                    {messages.map((msg, index) => (
                      <motion.div
                        key={index}
                        custom={msg.from === 'user'}
                        variants={messageBubbleVariants}
                        initial="hidden"
                        animate="visible"
                        className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                     
                        {msg.from === 'bot' && (
                          <div className="w-6 h-6 rounded-full bg-green-400/20 border border-green-400/40 flex items-center justify-center mr-2 mt-1 shrink-0">
                            <Dumbbell size={12} className="rotate-90 text-green-400" />
                          </div>
                        )}
                        <div className={`px-3 py-2.5 sm:px-4 sm:py-3 rounded-2xl max-w-[75%] sm:max-w-xs text-sm leading-relaxed
                          ${msg.from === 'bot'
                            ? 'bg-gray-900 border border-green-400/20 text-white rounded-bl-none'
                            : 'bg-green-400 text-black rounded-br-none font-medium'}`}
                        >
                          {msg.text}
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                  <div ref={messagesEndRef} />
                </div>

              
                <div className="p-3 sm:p-4 border-t border-green-400/20 shrink-0">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentState}
                      className="flex flex-wrap gap-2 sm:gap-3 justify-center"
                      variants={buttonGroupVariants}
                      initial="hidden"
                      animate="visible"
                      exit={{ opacity: 0, y: -8, transition: { duration: 0.15 } }}
                    >
                      {currentState === 'STARTING' && (
                        <>
                          {['Yes', 'No'].map(opt => (
                            <motion.button
                              key={opt}
                              variants={buttonVariants}
                              whileHover={{ scale: 1.07, backgroundColor: 'rgba(74,222,128,0.12)' }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => handleTransition(opt, null)}
                              className="border border-green-400 text-green-400 px-4 py-2 sm:px-5 rounded-full text-sm transition-colors duration-200"
                            >{opt}</motion.button>
                          ))}
                        </>
                      )}
                      {currentState === 'ASK_AGE' && (
                        <>
                          {['Under 18', '18-44', '45+'].map(opt => (
                            <motion.button
                              key={opt}
                              variants={buttonVariants}
                              whileHover={{ scale: 1.07, backgroundColor: 'rgba(74,222,128,0.12)' }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => handleTransition(opt, 'age')}
                              className="border border-green-400 text-green-400 px-4 py-2 rounded-full text-sm transition-colors duration-200"
                            >{opt}</motion.button>
                          ))}
                        </>
                      )}
                      {currentState === 'ASK_WEIGHT' && (
                        <>
                          {['Under 100lbs', '100-150lbs', '150-175lbs', '175-200lbs', '200lbs+'].map(opt => (
                            <motion.button
                              key={opt}
                              variants={buttonVariants}
                              whileHover={{ scale: 1.07, backgroundColor: 'rgba(74,222,128,0.12)' }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => handleTransition(opt, 'weight')}
                              className="border border-green-400 text-green-400 px-3 py-2 rounded-full text-xs sm:text-sm transition-colors duration-200"
                            >{opt}</motion.button>
                          ))}
                        </>
                      )}
                      {currentState === 'ASK_GOAL' && (
                        <>
                          {[
                            { label: 'Lose BF / Gain Muscle',     value: 'Lose BF(BodyFat)/Gain Muscle' },
                            { label: 'Gain Muscle & Maintain BF', value: 'Gain Muscle/Strength/Maintain BF(BodyFat)' },
                            { label: 'Maintain Muscle / Lose BF', value: 'Maintain Muscle/Gain Strength/Lose BF(Bodyfat)' },
                          ].map(({ label, value }) => (
                            <motion.button
                              key={value}
                              variants={buttonVariants}
                              whileHover={{ scale: 1.05, backgroundColor: 'rgba(74,222,128,0.12)' }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => handleTransition(value, 'goals')}
                              className="border border-green-400 text-green-400 px-3 py-2 rounded-full text-xs sm:text-sm transition-colors duration-200 text-center"
                            >{label}</motion.button>
                          ))}
                        </>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

       
          <AnimatePresence>
            {!isLoading && currentState === 'RECOMMEND' && (
              <motion.div
                key="recommend"
                className="flex flex-col items-center gap-4 sm:gap-6 w-full max-w-4xl py-6 sm:py-8 px-2 sm:px-4 overflow-y-auto"
                variants={recommendVariants}
                initial="hidden"
                animate="visible"
              >
             
                <motion.div variants={titleVariants} className="text-center">
                  <p className="text-green-400/60 text-xs sm:text-sm tracking-widest uppercase mb-1">Your Plan</p>
                  <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
                    {workouts[answers.goals]?.[answers.age]?.name}
                  </h1>
                </motion.div>

          
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full">
                  {Object.entries(workouts[answers.goals]?.[answers.age]?.days || {}).map(([day, data]) => (
                    <motion.div
                      key={day}
                      variants={cardVariants}
                      whileHover={{ scale: 1.02, borderColor: 'rgba(74,222,128,0.7)', transition: { duration: 0.2 } }}
                      className="border border-green-400 rounded-2xl p-4 sm:p-6 bg-black/40 backdrop-blur-sm"
                    >
                      <h2 className="text-green-400 text-xl sm:text-2xl font-bold mb-0.5">{day}</h2>
                      <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">{data.focus}</p>
                      {data.exercises.map((exercise, index) => (
                        <motion.div
                          key={index}
                          custom={index}
                          variants={exerciseRowVariants}
                          initial="hidden"
                          animate="visible"
                          className="flex justify-between text-white py-1.5 sm:py-2 border-b border-gray-800/80 gap-2 last:border-0"
                        >
                          <span className="text-xs sm:text-sm">{exercise.name}</span>
                          <span className="text-green-400 text-xs sm:text-sm text-right shrink-0">
                            {exercise.sets
                              ? `${exercise.sets} sets x ${exercise.reps} reps`
                              : `${exercise.timeMinutes} mins @ incline ${exercise.incline}`}
                          </span>
                        </motion.div>
                      ))}
                    </motion.div>
                  ))}
                </div>

              
                <motion.button
                  variants={titleVariants}
                  whileHover={{ scale: 1.06, boxShadow: '0 0 28px rgba(74,222,128,0.4)' }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleTransition('restart', null)}
                  className="bg-gradient-to-br from-green-400 to-green-700 text-black px-8 py-3 rounded-2xl text-base sm:text-xl font-bold transition-shadow duration-200 mt-2 flex items-center gap-2"
                >
                  Start Over
                  <span className="text-lg sm:text-xl leading-none">→</span>
                </motion.button>

              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </>
  )
}