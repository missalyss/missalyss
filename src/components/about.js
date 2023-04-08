import "./styles.css";
import { testFriend } from "fabric-store";
const About = () => {
  testFriend();
  return (
    <div className="max-width mx-auto">
      <h1 className="bg-blue-light p4 text-lg">Hello!</h1>
      <h2 className="bg-purple-light p4 text-md">
        My name is Alyssa. (she/her/they/them)
      </h2>
      <p className="bg-blue-light p2 text-left">
        I'm a front end developer in the web. I'm also a mom, step-mom,
        costumer, feminist, and shameless living-room dancer.
      </p>
      <p className="bg-blue-light p2 text-left">
        I love coffee, bees, books, music, and Halloween.
      </p>
      <p className="bg-blue-light p2 text-left">
        I believe in the power of web and love its creative and artistic power.
      </p>
      <p className="bg-blue-light p2 text-left">
        Technology should make it so that tedious and painful things go by
        quicker. It should even out the abundance deficit--we have the capacity
        to have abundance, but still so many live without. My goal with sharing
        my personal projects is{" "}
      </p>
      <p className="bg-blue-light p2 text-left">
        My projects won't be perfectly polished. They aim to have a basic
        function. Sometimes it's to solve a problem:
      </p>
      <ol className="pl0">
        <li className="bg-purple-light list-inside p2 text-left">
          It's hard to take a recipe book to the grocery store to make sure you
          have everything.
        </li>
        <li className="bg-purple-light list-inside p2 text-left">
          So many kids apps have too much complexity and flashiness for tiny
          little brains. They just wanna see some pretty colors man.
        </li>
        <li className="bg-purple-light list-inside p2 text-left">
          It's difficult to find a paper or record on your phone the score of
          two different people who are playing Rummy.
        </li>
      </ol>
      <p className="bg-blue-light p2 text-left">
        Sometimes it's just to be silly because it's fun to be silly:
      </p>
      <ol className="pl0">
        <li className="bg-purple-light list-inside p2 text-left">
          Could someone describe a color well enough that others could find its
          hex value?
        </li>
        <li className="bg-purple-light list-inside p2 text-left">
          Can I make wordle?
        </li>
      </ol>
      {/* <p>I have experience </p> */}
    </div>
  );
};

export default About;
