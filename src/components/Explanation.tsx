const Explanation = () => {
  return (
    <>
      <div className="explanation_image">
        <img
          // src="src/assets/images/illustration-stay-productive.png"
          src="https://raw.githubusercontent.com/jskrnqwerty/frontend-mentor-fylo/master/src/assets/images/illustration-stay-productive.png"
          alt="illustration-stay-productive"
          className="explanation_image_img"
        />
      </div>
      <div className="explanation_info">
        <h1 className="explanation_info_heading">
          Stay productive, wherever you are
        </h1>

        <p className="explanation_info_text">
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p className="explanation_info_text">
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <div className="explanation_info_how-fylo-works">
          <a
            href="#"
            className="explanation_info_how-fylo-works_text"
          >
            See how Fylo works
            <img
              // src="src/assets/images/icon-arrow.svg"
              src="https://raw.githubusercontent.com/jskrnqwerty/frontend-mentor-fylo/6a7b0c1f54d8fe1bdde603b3aaa9eb9720e3309b/src/assets/images/icon-arrow.svg"
              alt="arrow-icon"
              className="explanation_info_how-fylo-works_text_arrow-icon"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Explanation;
