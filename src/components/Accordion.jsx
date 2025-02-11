import React from "react";
import { AnimatePresence, motion as m } from "motion/react";

const Accordion = ({ i, opened, setOpened, question, answer }) => {
  const isOpen = i === opened;
  return (
    <div className="questionContainer py-2.5">
      <AnimatePresence>
        <div
          className="cursor-pointer flex items-center pb-5 justify-between"
          onClick={() => setOpened(isOpen ? false : i)}
        >
          <p className="inline-block font-medium">{question}</p>{" "}
          <button
            className={`relative w-7 h-7 rounded-full bg-[var(--primary)] cursor-pointer after:w-[50%] after:h-[2px] after:bg-white after:absolute after:left-2/4 after:-translate-2/4 before:w-[50%] before:h-[2px] before:bg-white before:absolute before:left-2/4 before:-translate-2/4 before:transition-all before:duration-300  ${
              isOpen ? "before:rotate-0" : "before:rotate-90"
            }`}
          />
        </div>

        {isOpen && (
          <m.div
            className=""
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            {answer}
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
