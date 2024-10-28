import React from 'react'

const Button = ({name}) => {
  return (
      <div className='py-1 px-2 mx-4 bg-gray-200 rounded-lg'>
          <button>{name}</button>
    </div>
  )
}

export default Button