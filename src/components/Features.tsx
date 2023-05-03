const Features = () => {
  type featuresItemType = { icon: string; heading: string; text: string };
  const features: featuresItemType[] = [
    {
      // icon: "src/assets/images/icon-access-anywhere.svg",
      icon: "https://raw.githubusercontent.com/jskrnqwerty/frontend-mentor-fylo/6a7b0c1f54d8fe1bdde603b3aaa9eb9720e3309b/src/assets/images/icon-access-anywhere.svg",
      heading: "Access your files, anywhere",
      text: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
    },
    {
      // icon: "src/assets/images/icon-security.svg",
      icon: "https://raw.githubusercontent.com/jskrnqwerty/frontend-mentor-fylo/6a7b0c1f54d8fe1bdde603b3aaa9eb9720e3309b/src/assets/images/icon-security.svg",
      heading: "Security you can trust",
      text: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
    },
    {
      // icon: "src/assets/images/icon-collaboration.svg",
      icon: "https://raw.githubusercontent.com/jskrnqwerty/frontend-mentor-fylo/6a7b0c1f54d8fe1bdde603b3aaa9eb9720e3309b/src/assets/images/icon-collaboration.svg",
      heading: "Real-time collaboration",
      text: "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
    },
    {
      // icon: "src/assets/images/icon-any-file.svg",
      icon: "https://raw.githubusercontent.com/jskrnqwerty/frontend-mentor-fylo/6a7b0c1f54d8fe1bdde603b3aaa9eb9720e3309b/src/assets/images/icon-any-file.svg",
      heading: "Store any type of file",
      text: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
    },
  ];

  return (
    <>
      {features.map((item, index) => (
        <div
          className="features_item"
          key={index}
        >
          <img
            src={item.icon}
            alt="icon-access-anywhere"
            className="features_item_icon"
          />
          <h2 className="features_item_heading">{item.heading}</h2>
          <p className="features_item_text">{item.text}</p>
        </div>
      ))}
    </>
  );
};

export default Features;
