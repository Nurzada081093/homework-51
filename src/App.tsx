import './App.css';
import Ball from './components/Ball/Ball';
import {useState} from 'react';


const App = () => {

  const [numbersArray, setNumbers] = useState<number[]>([5, 11, 16, 23, 32]);

  const getNewNumber = () => {
    const newArrayWithNumbers: number[] = [];

    for (let i = 0; i <= 4; i++) {
      const getRandomNumber = Math.floor(Math.random() * (36 - 5 + 1)) + 5;

      if (newArrayWithNumbers[i] !== getRandomNumber) {
        newArrayWithNumbers.push(getRandomNumber);
      }
    }

    setNumbers(newArrayWithNumbers);

  };


  return (
    <>
      <div className='ball-content'>
        <button className='numberBtn' onClick={getNewNumber}>New numbers</button>
        <div className='balls'>
          {numbersArray.map((number, index) => (
            <Ball key={index} number={number}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
