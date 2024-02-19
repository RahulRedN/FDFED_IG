import ReviewCard from "./ReviewCard";


const Reviews = () => {
  return (
    <div className="h-full pl-6 py-4 bg-gray-50">
      <h1>REVIEWS</h1>

      <div className="mt-10 flex flex-wrap gap-3">

        <ReviewCard content="
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur provident exercitationem nihil in, consectetur, repudiandae rerum delectus eaque quos numquam ad nesciunt ullam earum corporis iusto enim quod amet architecto!5"/>
        
        <ReviewCard />
        <ReviewCard />

      </div>
    </div>
  );
};

export default Reviews;
