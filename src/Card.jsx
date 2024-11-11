import { useEffect, useState } from "react";

import Title from "./Title.jsx";
import Count from "./Count.jsx";
import ResetButton from "./ResetButton.jsx";
import ButtonContainer from "./ButtonContainer.jsx";
import CountButton from "./CountButton.jsx";

export default function Card() {
  const [count, setCount] = useState(0);
  const locked = count === 5;

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Space") {
        const newCount = count + 1;
        if (newCount > 5) {
          setCount(5);
          return;
        }
        setCount(newCount);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [count]);

  return (
    <div className={`card ${locked ? "card--limit" : ""}`}>
      <Title locked={locked} />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <ButtonContainer>
        <CountButton type="minus" setCount={setCount} locked={locked} />
        <CountButton type="plus" setCount={setCount} locked={locked} />
      </ButtonContainer>
    </div>
  );
}
