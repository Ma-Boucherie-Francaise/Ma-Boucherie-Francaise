"use client";
import { useState } from "react";
import FaqData from "../../data/Faqata.json";
import Accordion from "@/components/Accordion";

const QuestionsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Commandes");
  const [opened, setOpened] = useState(false);

  const filteredQuestions = Object.entries(FaqData)
    .filter(([key, questions], i) => key === selectedCategory)
    .map((data) => data[1]);

  return (
    <>
      <h1>Faq</h1>
      <div className="grid grid-cols-3">
        <div className="">
          <ul className="flex flex-col gap-2 border-l-2 py-3 pl-5">
            {Object.entries(FaqData).map((data, i) => {
              return (
                <li
                  className={`relative w-fit cursor-pointer 
  hover:after:scale-x-100 hover:after:origin-left 
  after:content-[''] after:absolute after:left-0 after:-bottom-[10%] 
  after:w-full after:origin-right after:scale-x-0 after:h-[1.5px] 
  after:transition-transform after:duration-300 after:bg-red-400 ${
    selectedCategory === data[0] ? "after:scale-x-100" : ""
  }`}
                  key={i}
                  onClick={() => {
                    setSelectedCategory(data[0]);
                    console.log("selected category:", data[0]);
                  }}
                >
                  {data[0]}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-span-2">
          {selectedCategory && (
            <h2 className="font-semibold text-3xl pb-10">{selectedCategory}</h2>
          )}
          {selectedCategory &&
            filteredQuestions &&
            filteredQuestions.map((data, i) =>
              data?.map(({ question, answer }, i) => (
                <Accordion
                  key={i}
                  i={i}
                  question={question}
                  answer={answer}
                  opened={opened}
                  setOpened={setOpened}
                />
              ))
            )}
        </div>
      </div>

      {/* {FaqData.map(({ title, questions }, i) => {
        return (
          <div key={i} className="faqBlockContainer">
            <h2>{title}</h2>
            {questions.map(({ question, answer }, i) => {
              return (
                <Accordion
                  key={i}
                  i={i}
                  question={question}
                  answer={answer}
                  opened={opened}
                  setOpened={setOpened}
                />
              );
            })}
          </div>
        );
      })} */}
    </>
  );
};

export default QuestionsSection;
