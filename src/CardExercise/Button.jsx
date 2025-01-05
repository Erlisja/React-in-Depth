import React from 'react'

function Button({text,handleClick}) {
  return (
    <Button onClick={handleClick}>{text}</Button>
   
  )
}

export default Button