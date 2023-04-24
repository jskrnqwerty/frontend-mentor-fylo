const Header = () => {
  type navMenuItemType = { name: string; link: string };
  const navMenu: navMenuItemType[] = [
    { name: "Features", link: "#" },
    { name: "Team", link: "#" },
    { name: "Sign In", link: "#" },
  ];

  return (
    <>
      <a href="/">
        <img
          src="src/assets/images/logo.svg"
          alt="logo"
          className="header_logo"
        />
      </a>
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
