const Header = () => {
  type navMenuItem = { name: string; link: string };
  const navMenu: navMenuItem[] = [
    { name: "Features", link: "#" },
    { name: "Team", link: "#" },
    { name: "Sign In", link: "#" },
  ];

  return (
    <>
      <img
        src="src/assets/images/logo.svg"
        alt="logo"
        className="header_logo"
      />
      <div className="header_nav-menu">
        {navMenu.map((item, index) => (
          <a
            href={item.link}
            className="header_nav-menu_item"
            key={index}
          >
            {item.name}
          </a>
        ))}
      </div>
    </>
  );
};

export default Header;
