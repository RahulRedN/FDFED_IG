import "./Styles/Ques.css"

const dummyData = [
  {
    id: 1,
    imageUrl: 'url1',
    question: 'Find Your Right Job With Us',
    answer: 'Dummy answer 1',
  },
  {
    id: 2,
    imageUrl: 'url2',
    question: 'Another Job Opportunity',
    answer: 'Dummy answer 2',
  },
  // Add more dummy data as needed
];

const Cards = () => {
  return (
    <div>
      {dummyData.map((data) => (
        <Card key={data.id} {...data} />
      ))}
    </div>
  );
};

const Card = ({ imageUrl, question, answer }) => {
  return (
    <div className="card-cont">
      <img src={imageUrl} alt="" />
      <h1 className="que">{question}</h1>
      <p className="ans">{answer}</p>
    </div>
  );
};

export default Cards;
