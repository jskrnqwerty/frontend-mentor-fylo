import Header from "./components/header/header";

function App() {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="intro-container">
        <img
          src="src/assets/images/illustration-intro.png"
          alt="intro-image"
          className="intro-image"
        />
        <h1 className="heading">
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className="text">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <button className="get-started"> Get Started</button>
      </div>

      <p>
        <br />
        Access your files, anywhere
        <br />
        The ability to use a smartphone, tablet, or computer to access your
        account means your files follow you everywhere.
        <br />
        Security you can trust
        <br />
        2-factor authentication and user-controlled encryption are just a couple
        of the security features we allow to help secure your files.
        <br />
        Real-time collaboration
        <br />
        Securely share files and folders with friends, family and colleagues for
        live collaboration. No email attachments required.
        <br />
        Store any type of file
        <br />
        Whether you're sharing holidays photos or work documents, Fylo has you
        covered allowing for all file types to be securely stored and shared.
        <br />
        Stay productive, wherever you are
        <br />
        Never let location be an issue when accessing your files. Fylo has you
        covered for all of your file storage needs.
        <br />
        Securely share files and folders with friends, family and colleagues for
        live collaboration. No email attachments required.
        <br />
        See how Fylo works
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
