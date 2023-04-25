import Header from "./components/Header";
import Features from "./components/Features";
import Intro from "./components/Intro";
import Explanation from "./components/Explanation";
import Testimonials from "./components/Testimonials";
import EarlyAccess from "./components/EarlyAccess";

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
      <div className="testimonials">
        <Testimonials />
      </div>
      <div className="early-access">
        <EarlyAccess />
      </div>

      <p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
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
