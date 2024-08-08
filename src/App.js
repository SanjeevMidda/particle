import "./index.css";
import Section from "./components/Section";

import imageOne from "./imgs/painting.jpg";
import imageTwo from "./imgs/sean-sinclair-5JmvwXZ0QHM-unsplash.jpg";
import imageThree from "./imgs/sean-sinclair-C_NJKfnTR5A-unsplash.jpg";
import imageFour from "./imgs/new.jpg";
import imageFive from "./imgs/susan-wilkinson-4C-ynOpVRgw-unsplash.jpg";
import imageSix from "./imgs/shubham-dhage-nN9cfTVx1jk-unsplash.jpg";
function App() {
  return (
    <div className="App">
      <Section
        image={imageFour}
        text={{
          textOne: "1",
          textTwo: "2",
          textThree: "3",
          textFour: "4",
          textFive: "5",
          textSix: "6",
        }}
      />

      <Section
        image={imageOne}
        text={{
          textOne: "1",
          textTwo: "2",
          textThree: "3",
          textFour: "4",
          textFive: "5",
          textSix: "6",
        }}
      />

      <Section
        image={imageThree}
        text={{
          textOne: "A",
          textTwo: "B",
          textThree: "C",
          textFour: "D",
          textFive: "E",
          textSix: "F",
        }}
      />

      <Section
        image={imageSix}
        text={{
          textOne: "1",
          textTwo: "2",
          textThree: "3",
          textFour: "4",
          textFive: "5",
          textSix: "6",
        }}
      />

      <Section
        image={imageFive}
        text={{
          textOne: "1",
          textTwo: "2",
          textThree: "3",
          textFour: "4",
          textFive: "5",
          textSix: "6",
        }}
      />
    </div>
  );
}

export default App;
