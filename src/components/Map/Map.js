import React, {Component} from 'react';
const Map = ({ zipcode }) => {
      return (
        <div className='center ma'>
          <div className='absolute mt2'>
          <h2>{zipcode}</h2>
          </div>
        </div>
      );
    }


export default Map;
