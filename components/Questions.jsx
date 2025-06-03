import React, { useEffect, useState } from "react";
import classes from "./quiz.module.css";

function Questions({questions}) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [right, setRight] = useState(false);
  const [indexOfValues, setIndexOfValues] = useState(null);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(null);
  const [rightAnswers, setRightAnswers] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState(false);
  const [wrongAnswersNumber, setWrongAnswersNumber] = useState(0);
  const [startAgain, setStartAgain] = useState(false);

  const answerHanlder = (e) => {
    const userAnswer = e.target.textContent;
    const rightAnswer = questions[selectedIndex].Answer;
    const variants = questions[selectedIndex].Variants;

    if (userAnswer === rightAnswer) {
      const indexOfAnswer = variants.indexOf(rightAnswer);
      setIndexOfValues(indexOfAnswer);
      setRight(true);
      setRightAnswers((prevValue) => prevValue + 1);
      setTimeout(() => {
        if (selectedIndex + 1 >= questions.length) {
          setIndexOfValues(questions.length);
          setStartAgain(true);
        } else {
          setSelectedIndex((prevValue) => prevValue + 1);
        }
        setRight(false);
        setIndexOfValues(null);
      }, 500);
    } else {
      setWrongAnswer(true);
      const index = variants.indexOf(userAnswer);
      setIndexOfValues(index);
      setWrongAnswersNumber((prevValue) => prevValue + 1);
      const correctAnswerIndex = variants.indexOf(rightAnswer);
      setCorrectAnswerIndex(correctAnswerIndex);
      setTimeout(() => {
        if (selectedIndex + 1 >= questions.length) {
          setIndexOfValues(questions.length);
          setStartAgain(true);
        } else {
          setSelectedIndex((prevValue) => prevValue + 1);
        }
        setWrongAnswer(false);
        setIndexOfValues(null);
        setCorrectAnswerIndex(null);
      }, 1000);
    }
  };

  return (
    <section className={classes.section}>
      {questions && (
        <>
          <h2>{questions[selectedIndex].Question}</h2>
          <ul>
            {questions[selectedIndex].Variants.map((question, index) => (
              <li key={index}>
                <button
                  onClick={answerHanlder}
                  className={
                    `${index === correctAnswerIndex ? classes.right : ""}
                  ${right && indexOfValues === index ? classes.right : ""}
                  ${indexOfValues === index && wrongAnswer ? classes.error : ""}
                  ${classes.answers}
                  `
                    // right &&  indexOfValues === index ? classes.right : wrongAnswer && indexOfValues === index ? classes.error : classes.answers
                  }
                >
                  {question}
                </button>
              </li>
            ))}
          </ul>
          <p>
            Ответил правильно {rightAnswers} из {questions.length}
          </p>
          <p>
            Ответил неправильно {wrongAnswersNumber} из {questions.length}
          </p>
          {startAgain && (
            <section className={classes.startAgain}>
              <p>
                Ваш коэфициент правильности составляет{" "}
                {Math.round((rightAnswers / questions.length) * 100)}%
              </p>
              <button onClick={() => setSelectedIndex(0)}>Начать снова</button>
            </section>
          )}
        </>
      )}
    </section>
  );
}

export default Questions;
