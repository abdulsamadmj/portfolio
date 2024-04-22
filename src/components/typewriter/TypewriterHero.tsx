import React from "react";
import { TypewriterEffectSmooth } from "../../utils/ui/typewriter-effect";
export function TypewriterHero() {
  const wordsList = [
    [
      {
        text: "MERN",
      },
      {
        text: "Stack",
      },
      {
        text: "Developer",
        className: "text-blue-500",
      },
    ],
    [
      {
        text: "Co-founder,",
      },
      {
        text: "DJX",
        className: "text-blue-500",
      },
    ],
  ];
  const [words, setWords] = React.useState(wordsList[0]);
  // set a useEffect to change words on every 3 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setWords((prevWords) => {
        const currentIndex = wordsList.indexOf(prevWords);
        const nextIndex =
          currentIndex + 1 === wordsList.length ? 0 : currentIndex + 1;
        return wordsList[nextIndex];
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex items-center gap-1">
      <div className="pb-[0.3rem] text-xl text-white">I am</div>
      {/* rewrite this typewriter with reverse animation also */}
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
