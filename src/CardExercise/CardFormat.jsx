import Header from "./Header";
import Button from "./Button";

function CardFormat() {
  return (
    <>
      <Header text={"Card Title"} />
      <Button
        text={"Click Me"}
        handleClick={() => console.log("Button clicked")}
      />
    </>
  );
}

export default CardFormat;
