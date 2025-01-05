import Header from "./Header"
import CardFormat from "./CardFormat"

function Profile({profileText, headerText, Buttontext, handleClick}) {
  return (
    <>
    <h1>{profileText}</h1>
    <CardFormat
    headerText={headerText}
     Buttontext={Buttontext}
      handleClick= {handleClick}
     />
    </>
  )
}

export default Profile