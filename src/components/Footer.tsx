import { useState } from "react";
import IconTwitter from "../assets/icons-components/IconTwitter";
import IconInstagram from "../assets/icons-components/IconInstagram";
import IconFacebook from "../assets/icons-components/IconFacebook";

const Footer = () => {
  const defaultColor = "hsl(0, 0%, 100%)";
  const hoverColor = "hsl(176, 68%, 64%)";
  const iconWidth = "2.5em";

  const [isFacebookHover, setIsFacebookHover] = useState<boolean>(false);
  const [isTwitterHover, setIsTwitterHover] = useState<boolean>(false);
  const [isInstagramHover, setIsInstagramHover] = useState<boolean>(false);

  type quickLinksType = { name: string; link: string };
  const quickLinks1: quickLinksType[] = [
    { name: "About Us", link: "/" },
    { name: "Jobs", link: "/" },
    { name: "Press", link: "/" },
    { name: "Blog", link: "/" },
  ];
  const quickLinks2: quickLinksType[] = [
    { name: "Contact Us", link: "/" },
    { name: "Terms", link: "/" },
    { name: "Privacy", link: "/" },
  ];

  return (
    <>
      <img
        src="src\assets\images\logo.svg"
        alt="Fylo logo"
        className="footer_logo"
      />
      <div className="footer_info">
        <div className="footer_info_address">
          <img
            src="src/assets/images/icon-location.svg"
            alt="location-icon"
            className="icon"
          />
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className="footer_info_contact">
          <div className="footer_info_contact_phone">
            <img
              src="src/assets/images/icon-phone.svg"
              alt="location-icon"
              className="icon"
            />
            <p className="text">+1-543-123-4567</p>
          </div>
          <div className="footer_info_contact_email">
            <img
              src="src/assets/images/icon-email.svg"
              alt="location-icon"
              className="icon"
            />
            <p className="text">example@fylo.com</p>
          </div>
        </div>
        <div className="footer_info_quick-links-1">
          <ul>
            {quickLinks1.map((item, index) => (
              <li key={index}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer_info_quick-links-2">
          <ul>
            {quickLinks2.map((item, index) => (
              <li key={index}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer_info_social-icons">
          <a
            href="https://github.com/jskrnqwerty"
            className="facebook-icon"
            onMouseOver={() => setIsFacebookHover(true)}
            onMouseLeave={() => {
              setIsFacebookHover(false);
            }}
          >
            <IconFacebook
              color={isFacebookHover ? hoverColor : defaultColor}
              width={iconWidth}
            />
          </a>

          <a
            href="https://github.com/jskrnqwerty"
            className="twitter-icon"
            onMouseOver={() => {
              setIsTwitterHover(true);
            }}
            onMouseLeave={() => {
              setIsTwitterHover(false);
            }}
          >
            <IconTwitter
              color={isTwitterHover ? hoverColor : defaultColor}
              width={iconWidth}
            />
          </a>

          <a
            href="https://github.com/jskrnqwerty"
            className="instagram-icon"
            onMouseOver={() => {
              setIsInstagramHover(true);
            }}
            onMouseLeave={() => {
              setIsInstagramHover(false);
            }}
          >
            <IconInstagram
              color={isInstagramHover ? hoverColor : defaultColor}
              width={iconWidth}
            />
          </a>
        </div>

        <div className="footer_info_social-icons-mobile">
          <a
            href="https://github.com/jskrnqwerty"
            className="facebook-icon"
          >
            <svg
              viewBox="0 0 56.693 56.693"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.347 5.157c-13.6 0-24.625 11.027-24.625 24.625 0 13.6 11.025 24.623 24.625 24.623s24.625-11.023 24.625-24.623c0-13.598-11.026-24.625-24.625-24.625zm6.517 24.522H30.6v15.207h-6.32V29.679h-3.006V24.31h3.006v-3.479c0-2.49 1.182-6.377 6.379-6.377l4.68.018v5.215h-3.398c-.555 0-1.34.277-1.34 1.461v3.163h4.818l-.555 5.368z"
                className="fill-000000"
              ></path>
            </svg>
          </a>

          <a
            href="https://github.com/jskrnqwerty"
            className="twitter-icon"
          >
            <svg
              viewBox="0 0 56.693 56.693"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.348 5.157c-13.6 0-24.625 11.027-24.625 24.625 0 13.6 11.025 24.623 24.625 24.623s24.623-11.023 24.623-24.623c0-13.598-11.024-24.625-24.623-24.625zm12.404 19.66c.013.266.018.533.018.803 0 8.201-6.242 17.656-17.656 17.656a17.572 17.572 0 0 1-9.513-2.787c.486.057.979.086 1.48.086a12.45 12.45 0 0 0 7.707-2.656 6.214 6.214 0 0 1-5.796-4.311 6.06 6.06 0 0 0 1.167.111c.566 0 1.114-.074 1.635-.217a6.21 6.21 0 0 1-4.979-6.084l.001-.08a6.184 6.184 0 0 0 2.811.777 6.204 6.204 0 0 1-2.761-5.166c0-1.137.306-2.204.84-3.12a17.618 17.618 0 0 0 12.792 6.483 6.206 6.206 0 0 1 6.045-7.619 6.2 6.2 0 0 1 4.529 1.959 12.395 12.395 0 0 0 3.941-1.506 6.223 6.223 0 0 1-2.73 3.433 12.407 12.407 0 0 0 3.565-.977 12.537 12.537 0 0 1-3.096 3.215z"
                className="fill-000000"
              ></path>
            </svg>
          </a>

          <a
            href="https://github.com/jskrnqwerty"
            className="instagram-icon"
          >
            <svg
              viewBox="0 0 56.7 56.7"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 56.7 56.7"
            >
              <circle
                cx="28.1"
                cy="30"
                r="4.4"
                className="fill-000000"
              ></circle>
              <path
                d="M33.6 19.2h-11c-1.6 0-3 .5-3.9 1.4-.9.9-1.4 2.3-1.4 3.9v11c0 1.6.5 3 1.5 4 1 .9 2.3 1.4 3.9 1.4h10.9c1.6 0 3-.5 3.9-1.4 1-.9 1.5-2.3 1.5-3.9v-11c0-1.6-.5-2.9-1.4-3.9-1-1-2.3-1.5-4-1.5zm-5.5 17.6c-3.8 0-6.8-3.1-6.8-6.8 0-3.8 3.1-6.8 6.8-6.8s6.9 3 6.9 6.8-3.1 6.8-6.9 6.8zm7.1-12.3c-.9 0-1.6-.7-1.6-1.6s.7-1.6 1.6-1.6 1.6.7 1.6 1.6-.7 1.6-1.6 1.6z"
                className="fill-000000"
              ></path>
              <path
                d="M28.3 5.2c-13.6 0-24.6 11-24.6 24.6 0 13.6 11 24.6 24.6 24.6 13.6 0 24.6-11 24.6-24.6.1-13.6-11-24.6-24.6-24.6zm13.1 30.4c0 2.3-.8 4.3-2.2 5.7-1.4 1.4-3.4 2.1-5.6 2.1H22.7c-2.2 0-4.2-.7-5.6-2.1-1.5-1.4-2.2-3.4-2.2-5.7v-11c0-4.6 3.1-7.8 7.8-7.8h11c2.3 0 4.2.8 5.6 2.2 1.4 1.4 2.1 3.3 2.1 5.6v11z"
                className="fill-000000"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
