import { useState } from "react";

const EarlyAccess = () => {
  const [isEmailValid, setIsEmailValid] = useState(true);

  return (
    <>
      <div className="early-access">
        <h2 className="early-access_heading">Get early access today</h2>
        <p className="early-access_text">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <form className="early-access_form">
          <div className="early-access_form_input">
            <input
              placeholder="email@example.com"
              className="early-access_form_input_field"
            ></input>
            {!isEmailValid && (
              <p className="early-access_form_input_error">
                Please enter a valid email address
              </p>
            )}
          </div>
          <button
            className="early-access_form_button"
            // onClick={}
          >
            Get Started For Free
          </button>
        </form>
      </div>
    </>
  );
};

export default EarlyAccess;
