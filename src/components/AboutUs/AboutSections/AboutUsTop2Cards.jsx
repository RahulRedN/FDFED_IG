const AboutUsTop2Cards = () => {
    const dummyData = [
      {
        title: 'Development & Training',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit nulla doloribus dolorum odit! Vel cupiditate numquam animi, saepe dolor voluptate laborum magni minus sequi ex illo, ipsum, quae dolores aspernatur',
      },
      {
        title: 'Job Placement',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit nulla doloribus dolorum odit! Vel cupiditate numquam animi, saepe dolor voluptate laborum magni minus sequi ex illo, ipsum, quae dolores aspernatur',
      },
      // Add more dummy data as needed
      {
        title: 'Job Counselling',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit nulla doloribus dolorum odit! Vel cupiditate numquam animi, saepe dolor voluptate laborum magni minus sequi ex illo, ipsum, quae dolores aspernatur',
      },
      {
        title: 'Test & Interview',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit nulla doloribus dolorum odit! Vel cupiditate numquam animi, saepe dolor voluptate laborum magni minus sequi ex illo, ipsum, quae dolores aspernatur',
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
  