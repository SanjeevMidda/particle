import React from "react";

const Section = ({ image, text }) => {
  let imageStyles = {
    background: `url(${image})`,
  };
  return (
    <div className="section">
      <header>
        <h3>particle /</h3>
      </header>
      <div className="img" style={imageStyles}></div>
      <div className="textContainer">
        <h1>{text.textOne}</h1>
        <h1>{text.textTwo}</h1>
        <h1>{text.textThree}</h1>
        <h1>{text.textFour}</h1>
        <h1>{text.textFive}</h1>
        <h1>{text.textSix}</h1>
      </div>
    </div>
  );
};

export default Section;
