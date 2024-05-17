import React from 'react';
import './Ball.css';

interface Props {
  number: number;
}

const Ball: React.FC<Props> = ({number}) => {
  return (
    <div className='circle'>
      {number}
    </div>
  );
};

export default Ball;