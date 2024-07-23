import './App.css';
import Calculator from "./DogCalculator";
import questionImage from './assets/question.png';
import board from './assets/board.png';
import littleDog from './assets/little_dog.png';
import bigDog from './assets/big_dog.png';
import endText from './assets/end-text.png';

function App() {
  return (
    <>
      <img className="board" src={board} alt="board" />
      <img className='question' src={questionImage} alt="Question" />
      <img className="littleDog glide-in" src={littleDog} alt="littleDog" />
      <img className="bigDog" src={bigDog} alt="bigDog" />
      <img className="endText" src={endText} alt="endText" />

      <Calculator />
    </>
  );
}

export default App;
