import React from 'react'
import Button from './Button'

const Buttonlist = () => {

  const buttons = ["Live", "All", "Gaming", "Cricket", "Soccer", "CS-2", "Dhoni", "xyz","xxxxxxxxxx"];

  return (
    <div className='flex'>
      {buttons.map((button,index) => (<Button key={ index} name={ button } />))}
    </div>
  );
}

export default Buttonlist