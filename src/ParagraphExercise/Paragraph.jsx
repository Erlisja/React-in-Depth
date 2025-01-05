import Header from './Header'

import React from 'react'

function Paragraph({text,paragraphTxt}) {
  return (
    <p>
        <Header text={text} />
        
       {paragraphTxt}</p>
  )
}

export default Paragraph