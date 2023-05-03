const Intro = () => {
  return (
    <>
      <img
        // src="src/assets/images/illustration-intro.png"
        src="https://raw.githubusercontent.com/jskrnqwerty/frontend-mentor-fylo/master/src/assets/images/illustration-intro.png"
        alt="intro-image"
        className="intro_image"
      />
      <h1 className="intro_heading">
        All your files in one secure location, accessible anywhere.
      </h1>
      <p className="intro_text">
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends family, and
        co-workers.
      </p>
      <button className="intro_get-started"> Get Started</button>
    </>
  );
};

export default Intro;
