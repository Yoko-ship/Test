import React from "react";
import classes from "./page.module.css";
import questions from "@/components/sport_questions.json";

function Page() {
  return (
    <main className={classes.main}>
      <section className={classes.section}>
        {questions.map((question,index) => (
          <div key={index}>
            <h2 className={classes.question}>{question.Question}</h2>
            <p className={classes.answer}>{question.Answer}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Page;
