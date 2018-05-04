import React, {Component} from 'react';


const Map = ({ zipcode , onZipCodeSubmit }) => {

    return (
      <div className='center ma'>
        <div className='absolute mt2'>
        <h2>{zipcode} {onZipCodeSubmit}</h2>
        </div>
      </div>
    )
}



export default Map;
