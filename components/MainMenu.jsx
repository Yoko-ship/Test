'use client'
import React, { useEffect, useState } from 'react'
import classes from "@/app/page.module.css"
import question from "@/components/sport_questions.json"
import Questions from './Questions'
function MainMenu() {

    const [isStarted,setIsStarted] = useState(false)
    const [questions,setQuestions] = useState("")


    useEffect(() =>{
      const shuffledArray = question.sort((a,b) => 0.5 - Math.random())
      setQuestions(shuffledArray)
    },[])
    
  return (
    <main className={classes.main}>
        <button onClick={() => setIsStarted(true)} className={classes.start}>Начать тестирования</button>

        {isStarted && (
            <Questions questions={questions}/>
        )}
    </main>
  )
}

export default MainMenu