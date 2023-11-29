const AboutUsTop2Cards = () => {
  const dummyData = [
    {
      title: "Develop & Training",
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
      title: "Job Placement",
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
    },

    {
      title: "Job Counselling",
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
      title: "Test & Interview",
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
    },
  ];

  return (
    <div className="AboutUsTop2Cards">
      {dummyData.map((data, index) => (
        <div className="AboutUsTop2Card" key={index}>
          <h3>{data.title}</h3>
          <p>{data.content}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutUsTop2Cards;
