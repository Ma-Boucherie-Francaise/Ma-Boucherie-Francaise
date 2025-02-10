"use client";
import { useState } from "react";
import FaqData from "../../assets/Faqata.json";

export default function Page() {
  const [clikedBlock, setClikedBlock] = useState();
  const [clickedQuestion, setClickedQuestion] = useState();

  return (
    <>
      <main id="FAQ">
        <h1>Faq</h1>
        {FaqData.map(({ title, questions }, i) => {
          return (
            <div key={i} className="faqBlockContainer">
              <h2>{title}</h2>
              {questions.map(({ question, answer }, i) => {
                return (
                  <div key={i} className="questionContainer">
                    <div className="question">
                      <p>{question}</p> <button />
                    </div>

                    <div className="answer">
                      <p>{answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </main>
    </>
  );
}
