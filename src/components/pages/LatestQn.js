import React, { useContext } from 'react';
import './latestQn.css';
import questionContext from '../context/questionContext';

const LatestQn = () => {
  const context = useContext(questionContext);

  return (
    <>
        <fieldset>
          <legend> Latest post </legend>
        </fieldset>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate provident sit blanditiis voluptas labore ea voluptatum recusandae iste quam corrupti officia consequuntur tenetur minima fugit minus iure dicta, eum consequatur?</p>
    </>
  )
}

export default LatestQn;
