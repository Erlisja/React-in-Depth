import './App.css'
import Card from "./components/Card"
import Cars from "./components/Cars"
import People from "./components/People"
import Button from "./components/Button"
import Input from "./components/Input"
import Grades from "./components/Grades"
import ContactForm from './components/ContactForm'
import Paragraph from './components/Paragraph'
import Section from './components/Section'
import Button1 from './Button1'
function App() {



  const handleClick = () => {
    console.log('Button clicked')
  }


  return (
    <>
    {/* // <ul>
    //   <li>Home</li>
    //   <li>About</li>
    //   <li>Contact</li>
    // </ul>
    <Card /> */}
    {/* <Cars /> */}
    { " "}
    {/* <People /> */}
    { " "}
    {/* <Button /> */}
    {/* <Input /> */}
    {/* <Grades /> */}
    {/* <ContactForm /> */}

    <Section />

    {/* <Button1 children={'Click Me'} function1={handleClick} /> */}
    </>
   
  )
}

export default App
