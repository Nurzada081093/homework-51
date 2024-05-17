import './App.css';
import Ball from './components/Ball/Ball';
import {useState} from 'react';


const App = () => {

  const [numbersArray, setNumbers] = useState<number[]>([5, 11, 16, 23, 32]);

  const getNewNumbers = () => {
    const newArrayWithNumbers: number[] = [];

    do {
      const getRandomNumber = Math.floor(Math.random() * (36 - 5 + 1)) + 5;
      if (!newArrayWithNumbers.includes(getRandomNumber)) {
        newArrayWithNumbers.push(getRandomNumber);
      }
    } while (newArrayWithNumbers.length < 5);

    newArrayWithNumbers.sort((a: number, b: number) => a - b);
    setNumbers(newArrayWithNumbers);
  };

  return (
    <>
      <div className='ball-content'>
        <button className='numberBtn' onClick={getNewNumbers}>New numbers</button>
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
