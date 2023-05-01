import Header from "./components/Header";
import Features from "./components/Features";
import Intro from "./components/Intro";
import Explanation from "./components/Explanation";
import Testimonials from "./components/Testimonials";
import EarlyAccess from "./components/EarlyAccess";
import Footer from "./components/Footer";

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
      <div className="early-access-block">
        <EarlyAccess />
      </div>
      <div className="footer">
        <Footer />
      </div>
      <footer>
        <p className="attribution">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
          >
            Frontend Mentor
          </a>
          . Coded by <a href="https://github.com/jskrnqwerty">jskrnqwerty</a>.
        </p>
      </footer>
    </>
  );
}

export default App;
