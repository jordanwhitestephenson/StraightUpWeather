import React, {Component} from 'react';

const InputForm  = ({ onInputChange, onButtonSubmit }) => {
 return (
   <div className = "flex flex-column">
     <p className='f3 center'>
       {'Enter Zipcode'}
     </p>
     <div className='center'>
       <div className='form center pa4 br3 shadow-5 mb2'>
         <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
         <button
           className='w-30 grow f4 link ph3 pv2 dib white dark-green'
           onClick={onButtonSubmit}
         >Detect</button>
       </div>
     </div>
   </div>
 )
}

export default InputForm;
