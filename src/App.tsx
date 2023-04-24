import Header from "./components/Header";
import Features from "./components/Features";
import Intro from "./components/Intro";
import Explanation from "./components/Explanation";

function App() {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="intro">
        <Intro />
      </div>
      <div className="features">
        <Features />
      </div>
      <div className="explanation">
        <Explanation />
      </div>

      <p>
        <br />
        Fylo has improved our team productivity by an order of magnitude. Since
        making the switch our team has become a well-oiled collaboration
        machine.
        <br />
        Satish Patel
        <br />
        Founder & CEO, Huddle
        <br />
        Fylo has improved our team productivity by an order of magnitude. Since
        making the switch our team has become a well-oiled collaboration
        machine.
        <br />
        Bruce McKenzie
        <br />
        Founder & CEO, Huddle
        <br />
        Fylo has improved our team productivity by an order of magnitude. Since
        making the switch our team has become a well-oiled collaboration
        machine.
        <br />
        Iva Boyd
        <br />
        Founder & CEO, Huddle
        <br />
        Get early access today
        <br />
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
        <br />
        Get Started For Free
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
        <br />
        +1-543-123-4567
        <br />
        example@fylo.com
        <br />
        About Us
        <br />
        Jobs
        <br />
        Press
        <br />
        Blog
        <br />
        Contact Us
        <br />
        Terms
        <br />
        Privacy
        <br />
      </p>

      <footer>
        <p className="attribution">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
          >
            Frontend Mentor
          </a>
          . Coded by <a href="#">Jaskaran</a>.
        </p>
      </footer>
    </>
  );
}

export default App;
