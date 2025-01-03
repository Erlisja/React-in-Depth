import React from 'react'

function Input() {

    const handleInput = (e) =>{
       const value = e.target.value
       const input = e.target.tagName
       const id = e.target.getAttribute("id")
       const log = `[${input} id=${id}] ${value}`
       console.log(log);

    }



  return (
    <div>
      <input type='text' id='username' onChange= {handleInput}/>
    </div>
  )
}

export default Input