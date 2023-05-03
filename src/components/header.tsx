const Header = () => {
  type navMenuItemType = { name: string; link: string };
  const navMenu: navMenuItemType[] = [
    { name: "Features", link: "#" },
    { name: "Team", link: "#" },
    { name: "Sign In", link: "#" },
  ];

  return (
    <>
      <a href="#">
        <img
          // src="src/assets/images/logo.svg"
          src="https://raw.githubusercontent.com/jskrnqwerty/frontend-mentor-fylo/6a7b0c1f54d8fe1bdde603b3aaa9eb9720e3309b/src/assets/images/logo.svg"
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
