import Header from "./Header";
import Button from "./Button";

function CardFormat({headerText, Buttontext, handleClick}) {
  return (
    <>
     <h2>{headerText}</h2>
      <Button text={Buttontext} handleClick={handleClick} />
    
    </>
  );
}

export default CardFormat;
