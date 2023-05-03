const Testimonials = () => {
  type testimonialsItemType = {
    name: string;
    designation: string;
    profilePhoto: string;
    statement: string;
  };
  const testimonials: testimonialsItemType[] = [
    {
      name: "Satish Patel",
      designation: "Founder & CEO, Huddle",
      // profilePhoto: "src/assets/images/profile-1.jpg",
      profilePhoto:
        "https://raw.githubusercontent.com/jskrnqwerty/frontend-mentor-fylo/master/src/assets/images/profile-1.jpg",
      statement:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    },
    {
      name: "Bruce McKenzie",
      designation: "Founder & CEO, Huddle",
      // profilePhoto: "src/assets/images/profile-2.jpg",
      profilePhoto:
        "https://raw.githubusercontent.com/jskrnqwerty/frontend-mentor-fylo/master/src/assets/images/profile-2.jpg",
      statement:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    },
    {
      name: "Iva Boyd",
      designation: "Founder & CEO, Huddle",
      // profilePhoto: "src/assets/images/profile-3.jpg",
      profilePhoto:
        "https://raw.githubusercontent.com/jskrnqwerty/frontend-mentor-fylo/master/src/assets/images/profile-3.jpg",
      statement:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    },
  ];

  return (
    <>
      <img
        // src="src\assets\images\bg-quotes.png"
        src="https://raw.githubusercontent.com/jskrnqwerty/frontend-mentor-fylo/master/src/assets/images/bg-quotes.png"
        alt="quotes-icon"
        className="testimonials_quotes-icon"
      />
      {testimonials.map((item, index) => (
        <div
          className="testimonials_card"
          key={index}
        >
          <p className="testimonials_card_statement">{item.statement}</p>
          <div className="testimonials_card_author">
            <img
              src={item.profilePhoto}
              alt="profile photo"
              className="testimonials_card_author_photo"
            />
            <p className="testimonials_card_author_name">{item.name}</p>
            <p className="testimonials_card_author_designation">
              {item.designation}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Testimonials;
