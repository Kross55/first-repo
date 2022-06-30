import React from 'react';
import preloader from '../../../assets/images/circles.svg'

const Preloader = (props) => {
  return (
    <div style={{ backgroundColor: 'black' }}>
      <img src={preloader} />
    </div>
  );
};

export default Preloader; 
