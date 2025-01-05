import Header from "./Header";

import React from "react";

function Paragraph(props) {
  return (
    <>
      {props.children}
      <p>{props.paragraphTxt}</p>
    </>
  );
}

export default Paragraph;
