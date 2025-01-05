import Paragraph from "./Paragraph"
import Header from "./Header"
import Button from "./Button"

function Section() {


  const handleClick = () => {
    console.log('Button clicked')
  }
  return (
    <>
    <Header text={'Welcome to my Page'} />
    <Paragraph text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi et cum vitae?Illum, cum accusantium. Aliquid quas, '} />
    <Button text={'Click Me'} onclick={handleClick} />
    </>
    
  )
}

export default Section