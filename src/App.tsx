import { useState } from "react";
import "./App.css";
import Rater, { RaterProps } from "./components/Rater";
import ThankYou from "./components/ThankYou";

const App = () => {
  const [rating, setIsRating] = useState<boolean>(true);
  const [chosenValue, setChosenValue] = useState<number>(0);

  const raterProps: RaterProps = {
    setIsRating,
    chosenValue,
    setChosenValue,
  };

  return (
    <>
      <div className="container">
        {rating ? <Rater {...raterProps} /> : <ThankYou />}
      </div>
    </>
  );
};

export default App;
