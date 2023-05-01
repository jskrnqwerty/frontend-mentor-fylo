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
      </div>
    </>
  );
};

export default Footer;
