import React from 'react';
import loading from '../images/icons8-spinner.gif';

export default function Spinner() {
    return (
      <div className='d-flex' style={{height:'90vh', justifyContent:'center', alignItems:'center'}}>
        <img src={loading} alt="loading..." />
      </div>
    )
}