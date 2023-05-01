import { useState } from "react";

const EarlyAccess = () => {
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
  const [inputEmail, setInputEmail] = useState<string>("");
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g;

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setInputEmail(inputValue);
  };

  const validateEmail = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    console.log("Email address entered:", inputEmail);

    const validEmail = inputEmail.match(emailRegex);

    if (validEmail) {
      setIsEmailValid(true);
      setInputEmail("");
    } else {
      setIsEmailValid(false);
    }
  };

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
              type="email"
              placeholder="email@example.com"
              value={inputEmail}
              className="early-access_form_input_field"
              onChange={(e) => {
                handleInput(e);
              }}
            ></input>
            {!isEmailValid && (
              <p className="early-access_form_input_error">
                Please enter a valid email address
              </p>
            )}
          </div>
          <button
            className="early-access_form_button"
            onClick={(e) => validateEmail(e)}
          >
            Get Started For Free
          </button>
        </form>
      </div>
    </>
  );
};

export default EarlyAccess;
