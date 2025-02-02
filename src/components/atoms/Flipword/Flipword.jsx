import React from "react";
import { FlipWords } from "../../ui/flip-words.jsx";

export default function FlipWordsDemo() {
  const words = ["work", "collaboration", "innonvation"];

  return (
    (<div className="h-[15rem] flex justify-center items-center px-20">
      <div
        className="text-6xl mx-auto font-bold text-neutral-600 dark:text-neutral-400">
        Where
        <FlipWords 
            className={"text-primary text-sky-800"}
            words={words}/>
        happens.
      </div>
    </div>)
  );
}
