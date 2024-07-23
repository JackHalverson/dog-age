import React, { useState } from "react";
import prompt from "./assets/prompt.png";
import inputBox from "./assets/input_box.png";
import number0 from "./assets/numbers/0.png";
import number1 from "./assets/numbers/1.png";
import number2 from "./assets/numbers/2.png";
import number3 from "./assets/numbers/3.png";
import number4 from "./assets/numbers/4.png";
import number5 from "./assets/numbers/5.png";
import number6 from "./assets/numbers/6.png";
import number7 from "./assets/numbers/7.png";
import number8 from "./assets/numbers/8.png";
import number9 from "./assets/numbers/9.png";

const numberImages = [
  number0,
  number1,
  number2,
  number3,
  number4,
  number5,
  number6,
  number7,
  number8,
  number9,
];

const Calculator: React.FC = () => {
  const [age, setAge] = useState<number | string | undefined>(undefined);
  const [dogAge, setDogAge] = useState<number | undefined>(undefined);

  // Handle change for the age input field
  const handleAgeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const humanAge = event.target.valueAsNumber;
    setAge(humanAge);
    if (!isNaN(humanAge)) {
      setDogAge(16 * Math.log(humanAge) + 31);
    } else {
      setDogAge(undefined);
    }
  };

  const renderNumberImages = (number: number | string | undefined) => {
    if (number === undefined) return null;
    const digits = number.toString().split("");
    return digits.map((digit, index) => (
      <img key={index} src={numberImages[parseInt(digit)]} alt={digit} />
    ));
  };

  return (
    <>
      <form>
        <div>
          <img className="prompt" src={prompt} alt="Prompt" />
          <img className="inputBox" src={inputBox} alt="input box" />
          <input
            type="number"
            id="age"
            value={age !== undefined ? age : ""}
            onChange={handleAgeChange}
          />
        </div>
      </form>
      {dogAge !== undefined && (
        <div>
          <p className="age">{renderNumberImages(age)}</p>
          <p className="dogAge">{renderNumberImages(dogAge.toFixed(0))}</p>
          <p className="inputAge">{age}</p>
        </div>
      )}
    </>
  );
};

export default Calculator;
