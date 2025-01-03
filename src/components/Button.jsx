import React from 'react'

function Button() {

    const handleClick = ()=>{
        console.log("Button Clicked!");
    }


  return (
   <button on onClick={handleClick}>Click Me</button>
  )
}

export default Button