const Footer = () => {
  const quickLinks1 = [
    { name: "About Us", link: "/" },
    { name: "Jobs", link: "/" },
    { name: "Press", link: "/" },
    { name: "Blog", link: "/" },
  ];
  const quickLinks2 = [
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
            {/* <p>About Us</p>
            <p>Jobs</p>
            <p>Press</p>
          <p>Blog</p> */}
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
          {/* <p>Contact Us</p>
          <p>Terms</p>
          <p>Privacy</p> */}
        </div>
        <div className="footer_info_social-icons">
          <img
            src="src\assets\images\icon-facebook.svg"
            alt="facebook-icon"
            className="facebook-icon"
          />
          <img
            src="src\assets\images\icon-twitter.svg"
            alt="twitter-icon"
            className="twitter-icon"
          />
          <img
            src="src\assets\images\icon-instagram.svg"
            alt="instagram-icon"
            className="instagram-icon"
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
