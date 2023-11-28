import Cards from "./Cards";
import "./Styles/Ques.css"

const QuesCards = () => {
  return (
  
    <div className="whole-cont">

      <div className="top-cont">
 
              <h3> Our news </h3>
        <h1>Our Latest News  <br /> That Can Help You</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Ut elit
          tellus, luctus nec ullamcorper <br /> mattis, pulvinar dapibus leo.
        </p>
   </div>
       <div className="bottom-cont">
       <Cards/>
       </div>

      </div>
    
  );
};

export default QuesCards;
