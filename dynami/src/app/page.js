"use client"

import { useState } from 'react'
import { motion } from "motion/react";

import Intro from"@/app/Components/Introscreen";
import Greet from "@/app/Components/Greetscreen";
import Age from "@/app/Components/Agescreen";
import Weight from "@/app/Components/WeightScreen";
import Goals from "@/app/Components/Goalscreen";
import Recommend from "@/app/Components/Recommendscreen";
import Done from "@/app/Components/Donescreen";
import "./globals.css";




export default function Home() {

  const [currentState, setCurrentState] = useState('GREET');
  const [answers, setAnswers] = useState({
    age: null,
    weight: null,
    goals: null
  })

  return (
    <>
    <div 
    className='flex justify-center items-center min-h-screen bg-black'>
    <Intro/>
    </div>
    </>
  );
}
